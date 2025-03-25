const db = require('./db');
const fs = require('fs');
const path = require('path');
const { createTables } = require('./schema');
const mockProjects = require('./mock-data');

// Log database file location
const dbPath = path.join(__dirname, 'research_projects.db');
console.log('Database file location:', dbPath);

// Check if database file exists before initialization
const dbFileExists = fs.existsSync(dbPath);
console.log('Database file exists before initialization:', dbFileExists);

async function initializeDatabase() {
  try {
    console.log('Starting database initialization...');
    
    // Create tables first
    console.log('Creating database tables...');
    await createTables();
    
    // Begin transaction for data insertion
    console.log('Inserting mock data...');
    db.serialize(() => {
      // Start transaction
      db.run('BEGIN TRANSACTION');
      
      // Prepare statements for each table
      const projectStmt = db.prepare(`
        INSERT INTO projects (
          id, title, description, full_description, type, location, duration, 
          start_date, end_date, gender, age_range, institution, compensation, 
          research_lead, contact_email, contact_phone, status, 
          participants_needed, participants_enrolled, center
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `);
      
      const criteriaStmt = db.prepare('INSERT INTO criteria (project_id, criterion) VALUES (?, ?)');
      const diagnosisStmt = db.prepare('INSERT INTO diagnoses (project_id, diagnosis) VALUES (?, ?)');
      const timelineStmt = db.prepare('INSERT INTO timeline (project_id, title, date, description) VALUES (?, ?, ?, ?)');
      const teamStmt = db.prepare('INSERT INTO team (project_id, name, role, photo) VALUES (?, ?, ?, ?)');
      
      console.log(`Inserting ${mockProjects.length} projects into the database...`);
      
      // Insert each project and its related data
      mockProjects.forEach((project, index) => {
        console.log(`  Inserting project ${index + 1}/${mockProjects.length}: ${project.title}`);
        
        // Insert main project data
        projectStmt.run(
          project.id,
          project.title,
          project.description,
          project.fullDescription || null,
          project.type,
          project.location,
          project.duration,
          project.startDate,
          project.endDate || null,
          project.gender,
          project.ageRange,
          project.institution || null,
          project.compensation || null,
          project.researchLead || null,
          project.contactEmail || null,
          project.contactPhone || null,
          project.status || 'Recruiting',
          project.participantsNeeded || null,
          project.participantsEnrolled || null,
          project.center
        );
        
        // Insert criteria
        if (project.criteria && Array.isArray(project.criteria)) {
          console.log(`    Adding ${project.criteria.length} criteria`);
          project.criteria.forEach(criterion => {
            criteriaStmt.run(project.id, criterion);
          });
        }
        
        // Insert diagnoses
        if (project.diagnosis && Array.isArray(project.diagnosis)) {
          console.log(`    Adding ${project.diagnosis.length} diagnoses`);
          project.diagnosis.forEach(diagnosis => {
            diagnosisStmt.run(project.id, diagnosis);
          });
        }
        
        // Insert timeline if available
        if (project.timeline && Array.isArray(project.timeline)) {
          console.log(`    Adding ${project.timeline.length} timeline events`);
          project.timeline.forEach(item => {
            timelineStmt.run(project.id, item.title, item.date, item.description);
          });
        }
        
        // Insert team if available
        if (project.team && Array.isArray(project.team)) {
          console.log(`    Adding ${project.team.length} team members`);
          project.team.forEach(member => {
            teamStmt.run(project.id, member.name, member.role, member.photo);
          });
        }
      });
      
      // Finalize prepared statements
      projectStmt.finalize();
      criteriaStmt.finalize();
      diagnosisStmt.finalize();
      timelineStmt.finalize();
      teamStmt.finalize();
      
      // Commit transaction
      db.run('COMMIT', (err) => {
        if (err) {
          console.error('Error committing transaction:', err.message);
          return;
        }
        console.log('Database initialized with mock data successfully');
        
        // Check if database file exists after initialization
        const dbFileExistsAfter = fs.existsSync(dbPath);
        console.log('Database file exists after initialization:', dbFileExistsAfter);
        console.log('Database file size:', fs.statSync(dbPath).size, 'bytes');
        
        // Close the database connection
        db.close((err) => {
          if (err) {
            console.error('Error closing database:', err.message);
          } else {
            console.log('Database connection closed');
          }
        });
      });
    });
  } catch (error) {
    console.error('Error initializing database:', error);
    db.run('ROLLBACK');
    
    // Close the database connection on error
    db.close((err) => {
      if (err) {
        console.error('Error closing database:', err.message);
      } else {
        console.log('Database connection closed after error');
      }
    });
  }
}

// Initialize database
initializeDatabase();
