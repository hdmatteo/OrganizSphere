const mongoose = require("mongoose");

const TodosSchema = new mongoose.Schema({
  text: { type: String, require: true },
});

const todoModel = mongoose.model("ToDo", TodosSchema);
module.exports = todoModel;
