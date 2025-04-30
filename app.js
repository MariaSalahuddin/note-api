const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const noteRoutes = require("./routes/noteRoutes");

dotenv.config();
const app = express();

// Middleware
app.use(express.json()); // To parse incoming JSON bodies

// Connect to DB
connectDB();



// Routes
app.use("/api/auth", authRoutes);
app.use("/api", noteRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
