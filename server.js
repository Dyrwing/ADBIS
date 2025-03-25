const express = require('express');
const path = require('path');
const cors = require('cors');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;

console.log('Starting server setup...');

// Enable CORS
app.use(cors());

// Parse JSON request body
app.use(express.json());

// Serve static files from the Public directory
app.use(express.static(path.join(__dirname, 'Public')));
console.log('Static directory set:', path.join(__dirname, 'Public'));

// API routes - ensure this is a valid Express router
app.use('/api', apiRoutes);

// Route for the home page
app.get('/', (req, res) => {
  console.log('Home route requested');
  res.sendFile(path.join(__dirname, 'Public/HTML/home.html'));
});

// Routes for other HTML pages
app.get('/project-detail', (req, res) => {
  console.log('Project detail route requested');
  res.sendFile(path.join(__dirname, 'Public/HTML/project-detail.html'));
});

app.get('/faq', (req, res) => {
  console.log('FAQ route requested');
  res.sendFile(path.join(__dirname, 'Public/HTML/faq.html'));
});

app.get('/about', (req, res) => {
  console.log('About route requested');
  res.sendFile(path.join(__dirname, 'Public/HTML/about.html'));
});

app.get('/contact', (req, res) => {
  console.log('Contact route requested');
  res.sendFile(path.join(__dirname, 'Public/HTML/contact.html'));
});

// Handle 404 errors
app.use((req, res) => {
  console.log('404 error for path:', req.path);
  res.status(404).sendFile(path.join(__dirname, 'Public/HTML/home.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Press Ctrl+C to stop the server');
});

// Add uncaught exception handler to prevent silent failures
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});
