const express = require('express');
const router = express.Router();

const {
  createOffer,
  getActiveOffers,
  trackClick
} = require('../controllers/offerController');

// CREATE OFFER
router.post('/', createOffer);

// GET ACTIVE OFFERS
router.get('/', getActiveOffers);

// TRACK CLICK
router.put('/:id/click', trackClick);

module.exports = router;