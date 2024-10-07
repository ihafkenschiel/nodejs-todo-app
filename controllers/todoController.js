const { findAllTodos, addTodo } = require("../services/todoService");

// Get all to-do items
const getTodos = async (req, res, next) => {
  try {
    const todos = await findAllTodos();
    res.json(todos);
  } catch (error) {
    next(error);
  }
};

// Create a new to-do item
const createTodo = async (req, res, next) => {
  try {
    const { title } = req.body;
    const newTodo = await addTodo(title);
    res.status(201).json(newTodo);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getTodos,
  createTodo,
};
