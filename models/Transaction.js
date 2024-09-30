const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  merchant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Merchant",
  },
  amount: Number,
  type: { type: String }, // Payment, Borrowing, etc.
  status: String, // Pending, Completed
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Transaction", transactionSchema);
