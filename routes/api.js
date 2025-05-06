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
  const { gender, age, type, diagnosis, center } = req.query;
  
  // Start building the query
  let query = `
    SELECT p.id, p.title, p.description, p.type, p.location, p.duration, 
           p.start_date as startDate, p.gender, p.age_range as ageRange, p.center
    FROM projects p
  `;
  
  // Add conditions for filtering
  const conditions = [];
  const params = [];
  
  if (gender && gender !== 'all') {
    conditions.push('(p.gender = ? OR p.gender = "all")');
    params.push(gender);
  }
  
  if (age && age !== 'all') {
    conditions.push('p.age_range = ?');
    params.push(age);
  }
  
  if (type) {
    conditions.push('p.type = ?');
    params.push(type);
  }
  
  if (center) {
    conditions.push('p.center = ?');
    params.push(center);
  }
  
  // Add diagnosis filter which requires a join
  if (diagnosis) {
    query += 'INNER JOIN diagnoses d ON p.id = d.project_id ';
    conditions.push('d.diagnosis = ?');
    params.push(diagnosis);
  }
  
  // Add WHERE clause if there are conditions
  if (conditions.length > 0) {
    query += 'WHERE ' + conditions.join(' AND ');
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
