const express = require('express');
const db = require('../database/db');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Secret key for JWT signing
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

// Middleware to verify researcher JWT
const verifyResearcherToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.researcher = verified;
    next();
  } catch (error) {
    res.status(400).json({ error: 'Invalid token' });
  }
};

// GET all projects with basic info
router.get('/projects', (req, res) => {
  // Extract query parameters for filtering
  // Using req.query directly as it can contain multiple values per filter
  
  // Start building the query with DISTINCT to avoid duplicates
  let query = `
    SELECT DISTINCT p.id, p.title, p.description, p.type, p.location, p.duration, 
           p.start_date as startDate, p.gender, p.age_range as ageRange, p.center
    FROM projects p
  `;
  // We no longer need to join with diagnoses table
  // We'll use EXISTS subquery instead for better performance and compatibility with other filters
    // Add conditions for filtering
  const filterConditions = [];
  const params = [];
  
  // Handle gender filter (multiple values with OR condition)
  if (req.query.gender) {
    const genderValues = Array.isArray(req.query.gender) ? req.query.gender : [req.query.gender];
    if (!genderValues.includes('all')) {
      const genderConditions = genderValues.map(() => '(p.gender = ? OR p.gender = "all")');
      filterConditions.push(`(${genderConditions.join(' OR ')})`);
      genderValues.forEach(g => params.push(g));
    }
  }
  
  // Handle age filter (multiple values with OR condition)
  if (req.query.age) {
    const ageValues = Array.isArray(req.query.age) ? req.query.age : [req.query.age];
    if (!ageValues.includes('all')) {
      const ageConditions = ageValues.map(() => 'p.age_range = ?');
      filterConditions.push(`(${ageConditions.join(' OR ')})`);
      ageValues.forEach(a => params.push(a));
    }
  }
  // Handle type filter (multiple values with OR condition)
  if (req.query.type) {
    const typeValues = Array.isArray(req.query.type) ? req.query.type : [req.query.type];
    if (!typeValues.includes('all')) {
      const typeConditions = typeValues.map(() => 'p.type = ?');
      filterConditions.push(`(${typeConditions.join(' OR ')})`);
      typeValues.forEach(t => params.push(t));
    }
  }
  
  // Handle center filter (multiple values with OR condition)
  if (req.query.center) {
    const centerValues = Array.isArray(req.query.center) ? req.query.center : [req.query.center];
    if (!centerValues.includes('all')) {
      const centerConditions = centerValues.map(() => 'p.center = ?');
      filterConditions.push(`(${centerConditions.join(' OR ')})`);
      centerValues.forEach(c => params.push(c));
    }
  }
    // Handle diagnosis filter - using EXISTS to properly handle multiple diagnoses
  if (req.query.diagnosis) {
    const diagnosisValues = Array.isArray(req.query.diagnosis) ? req.query.diagnosis : [req.query.diagnosis];
    if (!diagnosisValues.includes('all')) {
      // Use EXISTS with a subquery to find projects with ANY of the selected diagnoses
      // This works better with multiple filter types than direct conditions
      const placeholders = diagnosisValues.map(() => '?').join(',');
      filterConditions.push(`EXISTS (SELECT 1 FROM diagnoses d2 WHERE d2.project_id = p.id AND d2.diagnosis IN (${placeholders}))`);
      diagnosisValues.forEach(d => params.push(d));
    }
  }
  // Add WHERE clause if there are conditions
  if (filterConditions.length > 0) {
    query += ' WHERE ' + filterConditions.join(' AND ');
    
    // Add GROUP BY and HAVING to handle the diagnosis filtering correctly
    // This ensures projects match all selected filter criteria
    query += ' GROUP BY p.id';
  }
  
  // Execute the query
  db.all(query, params, (err, projects) => {
    if (err) {
      console.error('Error fetching projects:', err.message);
      return res.status(500).json({ error: 'Database error' });
    }
    
    // For each project, fetch its criteria and diagnoses
    const promises = projects.map(project => {
      return new Promise((resolve, reject) => {
        // Get criteria for this project
        db.all('SELECT criterion FROM criteria WHERE project_id = ?', [project.id], (err, criteria) => {
          if (err) {
            reject(err);
            return;
          }
          
          // Extract criteria text from results
          project.criteria = criteria.map(c => c.criterion);
          
          // Get diagnoses for this project
          db.all('SELECT diagnosis FROM diagnoses WHERE project_id = ?', [project.id], (err, diagnoses) => {
            if (err) {
              reject(err);
              return;
            }
            
            // Extract diagnosis text from results
            project.diagnosis = diagnoses.map(d => d.diagnosis);
            resolve(project);
          });
        });
      });
    });
    
    // Wait for all promises to resolve and send the response
    Promise.all(promises)
      .then(completeProjects => {
        res.json(completeProjects);
      })
      .catch(error => {
        console.error('Error fetching project details:', error);
        res.status(500).json({ error: 'Database error' });
      });
  });
});

// GET single project with detailed info
router.get('/projects/:id', (req, res) => {
  const projectId = req.params.id;
  
  // Get the main project data
  db.get('SELECT * FROM projects WHERE id = ?', [projectId], (err, project) => {
    if (err) {
      console.error('Error fetching project:', err.message);
      return res.status(500).json({ error: 'Database error' });
    }
    
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    
    // Rename fields to match frontend expectations
    const formattedProject = {
      id: project.id,
      title: project.title,
      description: project.description,
      fullDescription: project.full_description,
      type: project.type,
      location: project.location,
      duration: project.duration,
      startDate: project.start_date,
      endDate: project.end_date,
      gender: project.gender,
      ageRange: project.age_range,
      institution: project.institution,
      compensation: project.compensation,
      researchLead: project.research_lead,
      contactEmail: project.contact_email,
      contactPhone: project.contact_phone,
      status: project.status,
      participantsNeeded: project.participants_needed,
      participantsEnrolled: project.participants_enrolled,
      center: project.center
    };
    
    // Get criteria
    db.all('SELECT criterion FROM criteria WHERE project_id = ?', [projectId], (err, criteria) => {
      if (err) {
        console.error('Error fetching criteria:', err.message);
        return res.status(500).json({ error: 'Database error' });
      }
      
      formattedProject.criteria = criteria.map(c => c.criterion);
      
      // Get diagnoses
      db.all('SELECT diagnosis FROM diagnoses WHERE project_id = ?', [projectId], (err, diagnoses) => {
        if (err) {
          console.error('Error fetching diagnoses:', err.message);
          return res.status(500).json({ error: 'Database error' });
        }
        
        formattedProject.diagnosis = diagnoses.map(d => d.diagnosis);
        
        // Get timeline
        db.all('SELECT title, date, description FROM timeline WHERE project_id = ? ORDER BY id', [projectId], (err, timeline) => {
          if (err) {
            console.error('Error fetching timeline:', err.message);
            return res.status(500).json({ error: 'Database error' });
          }
          
          formattedProject.timeline = timeline;
          
          // Get team
          db.all('SELECT name, role, photo FROM team WHERE project_id = ?', [projectId], (err, team) => {
            if (err) {
              console.error('Error fetching team:', err.message);
              return res.status(500).json({ error: 'Database error' });
            }
            
            formattedProject.team = team;
            
            // Send the complete project data
            res.json(formattedProject);
          });
        });
      });
    });
  });
});

// GET available filter options (for dropdowns)
router.get('/filter-options', (req, res) => {
  // This will fetch all unique options for filters
  const options = {};
  
  // Get gender options
  db.all('SELECT DISTINCT gender FROM projects', [], (err, genders) => {
    if (err) {
      console.error('Error fetching gender options:', err.message);
      return res.status(500).json({ error: 'Database error' });
    }
    
    options.genders = genders.map(g => g.gender);
    
    // Get age range options
    db.all('SELECT DISTINCT age_range FROM projects', [], (err, ages) => {
      if (err) {
        console.error('Error fetching age options:', err.message);
        return res.status(500).json({ error: 'Database error' });
      }
      
      options.ages = ages.map(a => a.age_range);
      
      // Get type options
      db.all('SELECT DISTINCT type FROM projects', [], (err, types) => {
        if (err) {
          console.error('Error fetching type options:', err.message);
          return res.status(500).json({ error: 'Database error' });
        }
        
        options.types = types.map(t => t.type);
        
        // Get diagnosis options
        db.all('SELECT DISTINCT diagnosis FROM diagnoses', [], (err, diagnoses) => {
          if (err) {
            console.error('Error fetching diagnosis options:', err.message);
            return res.status(500).json({ error: 'Database error' });
          }
          
          options.diagnoses = diagnoses.map(d => d.diagnosis);
          
          // Get center options
          db.all('SELECT DISTINCT center FROM projects', [], (err, centers) => {
            if (err) {
              console.error('Error fetching center options:', err.message);
              return res.status(500).json({ error: 'Database error' });
            }
            
            options.centers = centers.map(c => c.center);
            
            // Send all options
            res.json(options);
          });
        });
      });
    });
  });
});

// RESEARCHER ROUTES

// Register a new researcher
router.post('/researchers/register', async (req, res) => {
  try {
    const { username, password, fullName, email, institution } = req.body;
    
    if (!username || !password || !fullName || !email || !institution) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    
    // Check if username or email already exists
    db.get('SELECT * FROM researchers WHERE username = ? OR email = ?', [username, email], async (err, researcher) => {
      if (err) {
        console.error('Database error:', err.message);
        return res.status(500).json({ error: 'Database error' });
      }
      
      if (researcher) {
        return res.status(400).json({ error: 'Username or email already exists' });
      }
      
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
      
      // Insert new researcher
      db.run(
        'INSERT INTO researchers (username, password, full_name, email, institution) VALUES (?, ?, ?, ?, ?)',
        [username, hashedPassword, fullName, email, institution],
        function(err) {
          if (err) {
            console.error('Error creating researcher account:', err.message);
            return res.status(500).json({ error: 'Database error' });
          }
          
          // Success
          res.status(201).json({ 
            message: 'Researcher account created successfully',
            researcherId: this.lastID 
          });
        }
      );
    });
  } catch (error) {
    console.error('Error in researcher registration:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Login for researchers
router.post('/researchers/login', (req, res) => {
  try {
    const { username, password } = req.body;
    
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }
    
    // Find researcher by username
    db.get('SELECT * FROM researchers WHERE username = ?', [username], async (err, researcher) => {
      if (err) {
        console.error('Database error:', err.message);
        return res.status(500).json({ error: 'Database error' });
      }
      
      if (!researcher) {
        return res.status(400).json({ error: 'Invalid username or password' });
      }
      
      // Compare passwords
      const validPassword = await bcrypt.compare(password, researcher.password);
      if (!validPassword) {
        return res.status(400).json({ error: 'Invalid username or password' });
      }
      
      // Create and sign JWT
      const token = jwt.sign(
        { id: researcher.id, username: researcher.username }, 
        JWT_SECRET,
        { expiresIn: '24h' }
      );
      
      res.json({ 
        token,
        researcher: {
          id: researcher.id,
          username: researcher.username,
          fullName: researcher.full_name,
          email: researcher.email,
          institution: researcher.institution
        }
      });
    });
  } catch (error) {
    console.error('Error in researcher login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get researcher profile
router.get('/researchers/profile', verifyResearcherToken, (req, res) => {
  db.get('SELECT id, username, full_name, email, institution, created_at FROM researchers WHERE id = ?', 
    [req.researcher.id], 
    (err, researcher) => {
      if (err) {
        console.error('Database error:', err.message);
        return res.status(500).json({ error: 'Database error' });
      }
      
      if (!researcher) {
        return res.status(404).json({ error: 'Researcher not found' });
      }
      
      res.json({
        id: researcher.id,
        username: researcher.username,
        fullName: researcher.full_name,
        email: researcher.email,
        institution: researcher.institution,
        createdAt: researcher.created_at
      });
    }
  );
});

// Get researcher's projects
router.get('/researchers/projects', verifyResearcherToken, (req, res) => {
  db.all('SELECT * FROM projects WHERE researcher_id = ?', 
    [req.researcher.id], 
    (err, projects) => {
      if (err) {
        console.error('Database error:', err.message);
        return res.status(500).json({ error: 'Database error' });
      }
      
      // Format projects to match frontend expectations
      const formattedProjects = projects.map(project => ({
        id: project.id,
        title: project.title,
        description: project.description,
        type: project.type,
        location: project.location,
        duration: project.duration,
        startDate: project.start_date,
        status: project.status
      }));
      
      res.json(formattedProjects);
    }
  );
});

// Get researcher's project requests
router.get('/researchers/project-requests', verifyResearcherToken, (req, res) => {
  db.all(`
    SELECT pr.*, p.title as project_title 
    FROM project_requests pr
    LEFT JOIN projects p ON pr.project_id = p.id
    WHERE pr.researcher_id = ?
    ORDER BY pr.created_at DESC`,
    [req.researcher.id], 
    (err, requests) => {
      if (err) {
        console.error('Database error:', err.message);
        return res.status(500).json({ error: 'Database error' });
      }
      
      res.json(requests);
    }
  );
});

// Submit a new project request (create)
router.post('/researchers/project-requests', verifyResearcherToken, (req, res) => {
  try {
    const { projectData } = req.body;
    
    if (!projectData) {
      return res.status(400).json({ error: 'Project data is required' });
    }
    
    // Store the request in the database
    db.run(
      'INSERT INTO project_requests (researcher_id, request_type, request_data) VALUES (?, ?, ?)',
      [req.researcher.id, 'create', JSON.stringify(projectData)],
      function(err) {
        if (err) {
          console.error('Error creating project request:', err.message);
          return res.status(500).json({ error: 'Database error' });
        }
        
        res.status(201).json({
          message: 'Project creation request submitted successfully',
          requestId: this.lastID
        });
      }
    );
  } catch (error) {
    console.error('Error in project request creation:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Submit an edit project request
router.post('/researchers/project-requests/edit/:projectId', verifyResearcherToken, (req, res) => {
  try {
    const { projectId } = req.params;
    const { projectData } = req.body;
    
    if (!projectData) {
      return res.status(400).json({ error: 'Project data is required' });
    }
    
    // Check if project belongs to researcher
    db.get('SELECT * FROM projects WHERE id = ? AND researcher_id = ?', 
      [projectId, req.researcher.id],
      (err, project) => {
        if (err) {
          console.error('Database error:', err.message);
          return res.status(500).json({ error: 'Database error' });
        }
        
        if (!project) {
          return res.status(404).json({ error: 'Project not found or not authorized' });
        }
        
        // Store the edit request
        db.run(
          'INSERT INTO project_requests (researcher_id, project_id, request_type, request_data) VALUES (?, ?, ?, ?)',
          [req.researcher.id, projectId, 'edit', JSON.stringify(projectData)],
          function(err) {
            if (err) {
              console.error('Error creating edit request:', err.message);
              return res.status(500).json({ error: 'Database error' });
            }
            
            res.status(201).json({
              message: 'Project edit request submitted successfully',
              requestId: this.lastID
            });
          }
        );
      }
    );
  } catch (error) {
    console.error('Error in edit request creation:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Submit a delete project request
router.post('/researchers/project-requests/delete/:projectId', verifyResearcherToken, (req, res) => {
  try {
    const { projectId } = req.params;
    const { reason } = req.body;
    
    // Check if project belongs to researcher
    db.get('SELECT * FROM projects WHERE id = ? AND researcher_id = ?', 
      [projectId, req.researcher.id],
      (err, project) => {
        if (err) {
          console.error('Database error:', err.message);
          return res.status(500).json({ error: 'Database error' });
        }
        
        if (!project) {
          return res.status(404).json({ error: 'Project not found or not authorized' });
        }
        
        // Store the delete request
        db.run(
          'INSERT INTO project_requests (researcher_id, project_id, request_type, request_data) VALUES (?, ?, ?, ?)',
          [req.researcher.id, projectId, 'delete', JSON.stringify({ reason })],
          function(err) {
            if (err) {
              console.error('Error creating delete request:', err.message);
              return res.status(500).json({ error: 'Database error' });
            }
            
            res.status(201).json({
              message: 'Project deletion request submitted successfully',
              requestId: this.lastID
            });
          }
        );
      }
    );
  } catch (error) {
    console.error('Error in delete request creation:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Make sure the router is exported correctly
module.exports = router;
