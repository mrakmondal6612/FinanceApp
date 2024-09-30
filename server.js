const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
// console.log("Mongo URI:", process.env.MONGO_URI);
const app = express();

// Middleware
app.use(express.json());
app.use(express.static("public"));

// MongoDB connection
// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error", err));

// Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/merchants", require("./routes/merchants"));

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
