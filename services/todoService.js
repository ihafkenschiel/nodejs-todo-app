const Todo = require("../models/todoModel");

const findAllTodos = async () => {
  return await Todo.find();
};

const addTodo = async (title) => {
  const newTodo = new Todo({ title });
  return await newTodo.save();
};

module.exports = {
  findAllTodos,
  addTodo,
};
