const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
});

const TodoModel = mongoose.model("todo", todoSchema);
module.exports = TodoModel;
