const express = require("express");
const {
  registerUser,
  loginUser,
  getTransactionHistory,
} = require("../controllers/userController");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/:userId/transactions", getTransactionHistory);

module.exports = router;
