const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  imageURL: String,
  link: String,
  clickCount: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
  expiryDate: Date,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Offer', offerSchema);