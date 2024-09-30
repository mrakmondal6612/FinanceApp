const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
    balance: 0,
  });
  await newUser.save();
  res.status(201).json({ message: "User registered successfully" });
};

exports.loginUser = async (req, res) => {
  // User authentication logic
};

exports.getTransactionHistory = async (req, res) => {
  const userId = req.params.userId;
  const user = await User.findById(userId).populate("transactionHistory");
  res.json(user.transactionHistory);
};
