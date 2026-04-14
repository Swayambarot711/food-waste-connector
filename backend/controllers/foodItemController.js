const FoodItem = require('../models/FoodItem');


exports.createFoodItem = async (req, res) => {
  try {
    const foodItem = await FoodItem.create(req.body);

    res.status(201).json({
      success: true,
      data: foodItem
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

exports.getFoodItems = async (req, res) => {
  try {
    const foodItems = await FoodItem.find();

    res.status(200).json({
      success: true,
      count: foodItems.length,
      data: foodItems
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

exports.deleteFoodItem = async (req, res) => {
  try {
    const foodItem = await FoodItem.findByIdAndDelete(req.params.id);

    if (!foodItem) {
      return res.status(404).json({
        success: false,
        message: "Food item not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Food item deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

exports.getFoodItem = async (req, res) => {
  try {
    const foodItem = await FoodItem.findById(req.params.id);

    if (!foodItem) {
      return res.status(404).json({
        success: false,
        message: "Food item not found"
      });
    }

    res.status(200).json({
      success: true,
      data: foodItem
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

exports.updateFoodItem = async (req, res) => {
  try {
    const foodItem = await FoodItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!foodItem) {
      return res.status(404).json({
        success: false,
        message: "Food item not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Food item updated successfully",
      data: foodItem
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};