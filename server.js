const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const foodItemRoutes = require('./routes/foodItemRoutes');
const reservationRoutes = require('./routes/reservationRoutes');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/food-items', foodItemRoutes);
app.use('/api/reservations', reservationRoutes);


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Server is running...');
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
