const express = require('express');

const {
  createFoodItem,
  getFoodItems,
  deleteFoodItem
} = require('../controllers/foodItemController');

const router = express.Router();
router.post('/', createFoodItem);
router.get('/', getFoodItems);
router.delete('/:id', deleteFoodItem);

module.exports = router;