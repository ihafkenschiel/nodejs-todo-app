const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 3000;

app.use(express.json());

// Middleware to log each request
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Route to get to-do items
app.get("/todos", async (req, res, next) => {
  console.log("DEBUG: Received a request for all to-dos");

  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    res.json(response.data);
  } catch (error) {
    next(error); // Passes the error to the error-handling middleware
  }
});

// Add POST route to simulate creating a To-Do item
app.post("/todos", async (req, res, next) => {
  const { title, completed } = req.body;

  // Input validation
  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  try {
    const newTodo = { title, completed: completed || false };
    // Normally, this would be saved in a DB
    res.status(201).json(newTodo);
  } catch (error) {
    next(error);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
