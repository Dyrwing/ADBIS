const db = require('./db');

// Ensure the function is declared properly
const createTables = function() {
  return new Promise((resolve, reject) => {
    // Create projects table
    db.run(`
      CREATE TABLE IF NOT EXISTS projects (
        id INTEGER PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        full_description TEXT,
        type TEXT NOT NULL,
        location TEXT NOT NULL,
        duration TEXT NOT NULL,
        start_date TEXT NOT NULL,
        end_date TEXT,
        gender TEXT NOT NULL,
        age_range TEXT NOT NULL,
        institution TEXT,
        compensation TEXT,
        research_lead TEXT,
        contact_email TEXT,
        contact_phone TEXT,
        status TEXT,
        participants_needed INTEGER,
        participants_enrolled INTEGER,
        center TEXT NOT NULL,
        researcher_id INTEGER,
        FOREIGN KEY (researcher_id) REFERENCES researchers (id)
      )
    `, (err) => {
      if (err) {
        console.error('Error creating projects table:', err.message);
        reject(err);
        return;
      }

      // Create researchers table
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

          // Create criteria table with foreign key to projects
          db.run(`
            CREATE TABLE IF NOT EXISTS criteria (
              id INTEGER PRIMARY KEY,
              project_id INTEGER NOT NULL,
              criterion TEXT NOT NULL,
              FOREIGN KEY (project_id) REFERENCES projects (id) ON DELETE CASCADE
            )
          `, (err) => {
            if (err) {
              console.error('Error creating criteria table:', err.message);
              reject(err);
              return;
            }

            // Create diagnoses table with foreign key to projects
            db.run(`
              CREATE TABLE IF NOT EXISTS diagnoses (
                id INTEGER PRIMARY KEY,
                project_id INTEGER NOT NULL,
                diagnosis TEXT NOT NULL,
                FOREIGN KEY (project_id) REFERENCES projects (id) ON DELETE CASCADE
              )
            `, (err) => {
              if (err) {
                console.error('Error creating diagnoses table:', err.message);
                reject(err);
                return;
              }

              // Create timeline table with foreign key to projects
              db.run(`
                CREATE TABLE IF NOT EXISTS timeline (
                  id INTEGER PRIMARY KEY,
                  project_id INTEGER NOT NULL,
                  title TEXT NOT NULL,
                  date TEXT NOT NULL,
                  description TEXT NOT NULL,
                  FOREIGN KEY (project_id) REFERENCES projects (id) ON DELETE CASCADE
                )
              `, (err) => {
                if (err) {
                  console.error('Error creating timeline table:', err.message);
                  reject(err);
                  return;
                }

                // Create team table with foreign key to projects
                db.run(`
                  CREATE TABLE IF NOT EXISTS team (
                    id INTEGER PRIMARY KEY,
                    project_id INTEGER NOT NULL,
                    name TEXT NOT NULL,
                    role TEXT NOT NULL,
                    photo TEXT,
                    FOREIGN KEY (project_id) REFERENCES projects (id) ON DELETE CASCADE
                  )
                `, (err) => {
                  if (err) {
                    console.error('Error creating team table:', err.message);
                    reject(err);
                    return;
                  }

                  console.log('All tables created successfully');
                  resolve();
                });
              });
            });
          });
        });
      });
    });
  });
};

// Make sure we're explicitly assigning it to module.exports
module.exports = { createTables };
