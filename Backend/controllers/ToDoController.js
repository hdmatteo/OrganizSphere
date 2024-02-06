const todoModel = require("../models/ToDoModel");

module.exports.getToDo = async (req, res) => {
  const todos = await todoModel.find();
  res.send(todos);
};

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;

  todoModel.create({ text }).then((data) => {
    console.log("Added Succesfully...");
    console.log(data);
    res.status(201).json({message: 'Todo created'});
  });
};

module.exports.updateToDo = async (req, res) => {
  const { _id, text } = req.body;
  todoModel
    .findByIdAndUpdate(_id, { text })
    .then(() => res.send("Updated Sucessfully..."))
    .catch((err) => console.log(err));
};

module.exports.deleteToDo = async (req, res) => {
    const { _id} = req.body;
    todoModel 
      .findByIdAndDelete(_id)
      .then(() => res.send("Deleted Sucessfully..."),console.log("deleted succesfull "+_id))
      .catch((err) => res.send(err));
  };