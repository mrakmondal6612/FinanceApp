const mongoose = require('mongoose');

const merchantSchema = new mongoose.Schema({
  name: String,
  businessName: String,
  email: String,
  password: String,
  sales: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Sale',
    },
  ],
});

module.exports = mongoose.model('Merchant', merchantSchema);
