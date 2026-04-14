const Offer = require('../models/Offer');

// CREATE OFFER
exports.createOffer = async (req, res) => {
  try {
    const offer = await Offer.create({
      ...req.body,
      createdBy: req.user?.id || null // safe fallback if auth not added yet
    });

    res.status(201).json({
      success: true,
      data: offer
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// GET ACTIVE OFFERS
exports.getActiveOffers = async (req, res) => {
  try {
    const offers = await Offer.find({
      isActive: true,
      expiryDate: { $gt: new Date() } // only non-expired
    });

    res.json({
      success: true,
      data: offers
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// TRACK CLICK
exports.trackClick = async (req, res) => {
  try {
    const offer = await Offer.findByIdAndUpdate(
      req.params.id,
      { $inc: { clickCount: 1 } },
      { new: true }
    );

    res.json({
      success: true,
      data: offer
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};