const DiningHall = require('../models/DiningHall');

// CREATE DINING HALL
exports.createDiningHall = async (req, res) => {
  try {
    const diningHall = await DiningHall.create({
      ...req.body,
      userId: req.user.id
    });

    res.status(201).json({
      success: true,
      message: 'Dining hall created successfully!',
      data: diningHall
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create dining hall',
      error: error.message
    });
  }
};

// GET ALL DINING HALLS
exports.getAllDiningHalls = async (req, res) => {
  try {
    const diningHalls = await DiningHall.find()
      .populate('userId', 'name email');

    res.status(200).json({
      success: true,
      count: diningHalls.length,
      data: diningHalls
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to get dining halls',
      error: error.message
    });
  }
};

// GET SINGLE DINING HALL
exports.getDiningHall = async (req, res) => {
  try {
    const diningHall = await DiningHall.findById(req.params.id)
      .populate('userId', 'name email');

    if (!diningHall) {
      return res.status(404).json({
        success: false,
        message: 'Dining hall not found'
      });
    }

    res.status(200).json({
      success: true,
      data: diningHall
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to get dining hall',
      error: error.message
    });
  }
};

// UPDATE DINING HALL
exports.updateDiningHall = async (req, res) => {
  try {
    const diningHall = await DiningHall.findById(req.params.id);

    if (!diningHall) {
      return res.status(404).json({
        success: false,
        message: 'Dining hall not found'
      });
    }

    if (diningHall.userId.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized'
      });
    }

    const updatedDiningHall = await DiningHall.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      message: 'Dining hall updated successfully!',
      data: updatedDiningHall
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to update dining hall',
      error: error.message
    });
  }
};

// DELETE DINING HALL
exports.deleteDiningHall = async (req, res) => {
  try {
    const diningHall = await DiningHall.findById(req.params.id);

    if (!diningHall) {
      return res.status(404).json({
        success: false,
        message: 'Dining hall not found'
      });
    }

    if (diningHall.userId.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized'
      });
    }

    await DiningHall.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: 'Dining hall deleted successfully'
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete dining hall',
      error: error.message
    });
  }
};