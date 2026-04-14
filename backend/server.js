require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const foodItemRoutes = require('./routes/foodItemRoutes');
const reservationRoutes = require('./routes/reservationRoutes');

const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/dining-halls', require('./routes/diningHallRoutes'));
app.use('/api/food-items', foodItemRoutes);
app.use('/api/reservations', reservationRoutes);

// Test Route
app.get('/', (req, res) => {
  res.json({
    message: 'Food Waste Connector API is running!',
    status: 'success',
    endpoints: {
      register: '/api/auth/register',
      login: '/api/auth/login',
      profile: '/api/auth/me',
      diningHalls: '/api/dining-halls',
      foodItems: '/api/food-items',
      reservations: '/api/reservations'
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Test it: http://localhost:${PORT}`);
});