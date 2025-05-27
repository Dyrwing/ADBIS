const db = require('./database/db');

console.log('Checking database contents...');

// Get all projects and their types
db.all('SELECT id, title, type FROM projects ORDER BY id', [], (err, projects) => {
  if (err) {
    console.error('Error fetching projects:', err);
    return;
  }
  
  console.log('\nAll projects in database:');
  projects.forEach(project => {
    console.log(`ID: ${project.id}, Title: ${project.title}, Type: "${project.type}"`);
  });
  
  // Get distinct types
  db.all('SELECT DISTINCT type FROM projects', [], (err, types) => {
    if (err) {
      console.error('Error fetching types:', err);
      return;
    }
    
    console.log('\nDistinct types in database:');
    types.forEach(type => {
      console.log(`"${type.type}"`);
    });
    
    // Count projects by type
    db.all('SELECT type, COUNT(*) as count FROM projects GROUP BY type', [], (err, counts) => {
      if (err) {
        console.error('Error counting by type:', err);
        return;
      }
      
      console.log('\nProject counts by type:');
      counts.forEach(count => {
        console.log(`"${count.type}": ${count.count} projects`);
      });
      
      process.exit(0);
    });
  });
});
