const mongoose = require('mongoose');

const merchantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3
  },
  storeName: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true,
    match: /^\d{10}$/,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^\S+@\S+\.\S+$/
  },
  password: {
    type: String,
    required: true,
    minLength: 6
  },
  storeAddress: {
    type: String,
    maxLength: 255
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Merchant', merchantSchema);
