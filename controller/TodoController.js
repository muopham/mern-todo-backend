const TodoModel = require("../model/TodoModel");

const todoController = {
  getTodo: async (req, res) => {
    try {
      const todo = await TodoModel.find();
      res.status(200).json(todo);
    } catch (error) {
      console.log(error);
    }
  },
  addTodo: async (req, res) => {
    try {
      const newTodo = await TodoModel({
        text: req.body.text,
      });
      newTodo.save();
      res.status(200).json(newTodo);
    } catch (error) {
      console.log(error);
    }
  },
  deleteTodo: async (req, res) => {
    try {
      const todo = await TodoModel.findByIdAndDelete(req.params.id);
      res.status(200).json(todo);
    } catch (error) {
      console.log(error);
    }
  },
  completeTodo: async (req, res) => {
    try {
      const todo = await TodoModel.findById(req.params.id);
      todo.complete = !todo.complete;
      todo.save();
      res.status(200).json(todo);
    } catch (error) {
      console.log(error);
    }
  },
  updateTodo: async (req, res) => {
    try {
      const todo = await TodoModel.findByIdAndUpdate(
        req.params.id,
        { text: req.body.text },
        { new: true }
      );
      res.status(200).json(todo);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = todoController;
