const express = require("express");
const connectDB = require("./config/dbConfig");
const todoRoutes = require("./routes/todoRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Database connection
connectDB().catch((err) => console.error("Failed to connect to MongoDB:", err));

// Middleware
app.use(express.json());

// Routes
app.use("/api", todoRoutes);

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: "Server error" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
