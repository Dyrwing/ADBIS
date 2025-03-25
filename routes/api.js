const express = require('express');
const db = require('../database/db');
const router = express.Router();

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

// Make sure the router is exported correctly
module.exports = router;
