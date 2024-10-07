const express = require("express");
const { getTodos, createTodo } = require("../controllers/todoController");
const router = express.Router();

// GET /todos - Retrieve all to-do items
router.get("/todos", getTodos);

// POST /todos - Create a new to-do item
router.post("/todos", createTodo);

module.exports = router;
