const Reservation = require('../models/Reservation');
const FoodItem = require('../models/FoodItem');

exports.createReservation = async (req, res) => {
  try {
    const { foodItemId, studentName, quantity, pickupTime } = req.body;

    const foodItem = await FoodItem.findById(foodItemId);

    if (!foodItem) {
      return res.status(404).json({
        success: false,
        message: "Food item not found"
      });
    }

    if (foodItem.quantity < quantity) {
      return res.status(400).json({
        success: false,
        message: "Not enough quantity available"
      });
    }

    const reservation = await Reservation.create({
      foodItemId,
      studentName,
      quantity,
      pickupTime
    });

    foodItem.quantity -= quantity;
    await foodItem.save();

    res.status(201).json({
      success: true,
      data: reservation
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};
exports.getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find().populate("foodItemId");

    res.status(200).json({
      success: true,
      count: reservations.length,
      data: reservations
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
exports.cancelReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);

    if (!reservation) {
      return res.status(404).json({
        success: false,
        message: "Reservation not found"
      });
    }

    await reservation.deleteOne();

    res.status(200).json({
      success: true,
      message: "Reservation cancelled successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};