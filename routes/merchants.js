const express = require("express");
const {
  registerMerchant,
  loginMerchant,
  getSalesHistory,
} = require("../controllers/merchantController");
const router = express.Router();

router.post("/register", registerMerchant);
router.post("/login", loginMerchant);
router.get("/:merchantId/sales", getSalesHistory);

module.exports = router;
