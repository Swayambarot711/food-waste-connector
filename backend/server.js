require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());

 app.use('/api/auth', require('./routes/authRoutes'));
 app.use('/api/dining-halls', require('./routes/diningHallRoutes'));
 app.use('/api/food-items', require('./routes/foodItemRoutes'));
 app.use('/api/reservations', require('./routes/reservationRoutes'));
 app.use('/api/offers', require('./routes/offerRoutes'));
 app.use('/api/notifications', require('./routes/notificationRoutes'));
// Test routes
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
      reservations: '/api/reservations',
      offers: '/api/offers',
      notifications: '/api/notifications',
      test: '/test'
    }
  });
});

app.post('/test', (req, res) => {
  res.json({ works: true });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Test it: http://localhost:${PORT}`);
});