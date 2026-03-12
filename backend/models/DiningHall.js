const mongoose = require('mongoose');

const diningHallSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide dining hall name'],
    trim: true
  },
  location: {
    type: String,
    required: [true, 'Please provide location']
  },
  description: {
    type: String,
    default: ''
  },
  openingTime: {
    type: String,
    required: true
  },
  closingTime: {
    type: String,
    required: true
  },
  contactInfo: {
    phone: { type: String, default: '' },
    email: { type: String, default: '' }
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  timeSlots: [
    {
      time: String,
      available: {
        type: Boolean,
        default: true
      }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('DiningHall', diningHallSchema);