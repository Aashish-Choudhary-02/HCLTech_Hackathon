const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const crcRoutes = require('./routes/crc');
const piRoutes = require('./routes/pi');
const adminRoutes = require('./routes/admin');

dotenv.config();

const app = express();
app.use(express.json());

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  console.log('Request Body:', req.body);
  next();
});

// Register routes
app.use('/home', authRoutes);
app.use('/home/crc', crcRoutes);
app.use('/home/pi', piRoutes);
app.use('/home/admin', adminRoutes);

// Handle undefined routes
app.use((req, res) => {
  console.error(`Route not found: ${req.method} ${req.url}`);
  res.status(404).json({ error: 'Route not found' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
