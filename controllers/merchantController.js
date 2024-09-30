// controllers/merchantController.js

// Mock data for now, or integrate with a database later
const merchants = [
  { id: 1, name: "Merchant 1", sales: 1000, password: "pass123" },
  { id: 2, name: "Merchant 2", sales: 2000, password: "pass456" },
];

// Register a new merchant
exports.registerMerchant = (req, res) => {
  const { name, password } = req.body;

  if (!name || !password) {
    return res.status(400).json({ message: "Name and password are required" });
  }

  const newMerchant = {
    id: merchants.length + 1,
    name,
    password,
    sales: 0, // Start sales at 0 for new merchants
  };

  merchants.push(newMerchant);

  res.status(201).json({
    message: "Merchant registered successfully!",
    merchant: newMerchant,
  });
};

// Login a merchant
exports.loginMerchant = (req, res) => {
  const { name, password } = req.body;

  const merchant = merchants.find(
    (m) => m.name === name && m.password === password
  );

  if (!merchant) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({
    message: "Merchant logged in successfully!",
    merchantId: merchant.id,
  });
};

// Get sales history for a specific merchant by ID
exports.getSalesHistory = (req, res) => {
  const merchantId = parseInt(req.params.merchantId);
  const merchant = merchants.find((m) => m.id === merchantId);

  if (!merchant) {
    return res.status(404).json({ message: "Merchant not found" });
  }

  res.json({ sales: merchant.sales });
};
