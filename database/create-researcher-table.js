const db = require('./db');

// Function to create researchers table
async function createResearchersTable() {
  return new Promise((resolve, reject) => {
    console.log("Creating researchers table...");
    
    db.run(`
      CREATE TABLE IF NOT EXISTS researchers (
        id INTEGER PRIMARY KEY,
        username TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        full_name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        institution TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `, (err) => {
      if (err) {
        console.error('Error creating researchers table:', err.message);
        reject(err);
        return;
      }

      console.log("Researchers table created successfully");
      
      // Create project_requests table for managing researcher requests
      db.run(`
        CREATE TABLE IF NOT EXISTS project_requests (
          id INTEGER PRIMARY KEY,
          researcher_id INTEGER NOT NULL,
          project_id INTEGER, 
          request_type TEXT NOT NULL, 
          status TEXT NOT NULL DEFAULT 'pending',
          request_data TEXT NOT NULL, 
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP,
          admin_notes TEXT,
          FOREIGN KEY (researcher_id) REFERENCES researchers (id),
          FOREIGN KEY (project_id) REFERENCES projects (id) ON DELETE CASCADE
        )
      `, (err) => {
        if (err) {
          console.error('Error creating project_requests table:', err.message);
          reject(err);
          return;
        }
        
        console.log("Project requests table created successfully");
        resolve();
      });
    });
  });
}

// Execute the function
createResearchersTable()
  .then(() => {
    console.log("Database tables created successfully");
    db.close((err) => {
      if (err) {
        console.error('Error closing database:', err.message);
      } else {
        console.log('Database connection closed');
      }
    });
  })
  .catch((error) => {
    console.error("Error setting up tables:", error);
    db.close();
  });