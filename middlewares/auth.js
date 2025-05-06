const jwt = require('jsonwebtoken');
const db = require('../database/db');

// JWT secret key - should be in environment variables in a real application
const JWT_SECRET = 'region-h-psykiatri-jwt-secret-key-2025';

// Middleware to verify researcher JWT token
const verifyResearcherToken = (req, res, next) => {
  try {
    // Get token from header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Access denied. No token provided' });
    }

    const token = authHeader.split(' ')[1];
    
    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);
    
    // Check if researcher exists in database
    db.get('SELECT * FROM researchers WHERE id = ?', [decoded.id], (err, researcher) => {
      if (err) {
        console.error('Database error:', err.message);
        return res.status(500).json({ error: 'Database error' });
      }
      
      if (!researcher) {
        return res.status(401).json({ error: 'Invalid token - researcher not found' });
      }
      
      // Add researcher to request object
      req.researcher = {
        id: researcher.id,
        username: researcher.username
      };
      
      next();
    });
  } catch (error) {
    console.error('Auth error:', error.message);
    res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = {
  verifyResearcherToken,
  JWT_SECRET
};