const express = require('express');
const {
  createDiningHall,
  getAllDiningHalls,
  getDiningHall,
  updateDiningHall,
  deleteDiningHall
} = require('../controllers/diningHallController');
const { protect, restrictTo } = require('../middleware/auth');

const router = express.Router();

// Public routes
router.get('/', getAllDiningHalls);
router.get('/:id', getDiningHall);

// Protected routes
router.post(
  '/',
  protect,
  restrictTo('dining_hall', 'admin'),
  createDiningHall
);

router.put(
  '/:id',
  protect,
  restrictTo('dining_hall', 'admin'),
  updateDiningHall
);

router.delete(
  '/:id',
  protect,
  restrictTo('dining_hall', 'admin'),
  deleteDiningHall
);

module.exports = router;