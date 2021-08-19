const Board = require("../models/board");
const mongoose = require("mongoose");

const saveTask = async (req, res) => {
  if (!req.body.name || !req.body.description)
    return res.status(400).send("Process failed: Incomplete data");

  const board = new Board({
    userId: req.user._id, //con esta colocamos automaticamente asignamos la tarea a la persona logueada en el momento
    name: req.body.name,
    description: req.body.description,
    taskStatus: "To-do",
  });

  const result = await board.save();
  if (!result)
    return res.status(400).send("Process failed: Failed to register task");
  return res.status(200).send({ result });
};

const listTask = async (req, res) => {
  const board = await Board.find({ userId: req.user._id });
  if (!board || board.length === 0)
    return res.status(400).send("Process failed: No assigned task");
  return res.status(200).send({ board });
};

const updateTask = async (req, res) => {
  if (
    !req.body._id ||
    !req.body.name ||
    !req.body.taskStatus ||
    !req.body.description
  )
    return res.status(400).send("Process failed: Incomplete data");

  //cuando dice req.body es porque hay que digitar el id en el json y si dice req.user lo toma automaticamente desde el logueo del user
  let board = await Board.findByIdAndUpdate(req.body._id, {
    //aca se coloca es el id de la tarea y el segundo parametro es el json que se va a modificar
    userId: req.user._id,
    name: req.body.name,
    description: req.body.description,
    taskStatus: req.body.taskStatus,
  });

  if (!board) return res.status(400).send("Process failed: Task not found");
  return res.status(200).send({ board });
};

const deleteTask = async (req, res) => {
  const validId = mongoose.Types.ObjectId.isValid(req.params._id);
  if (!validId) return res.status(400).send("Process failed: Invalid id");

  const board = await Board.findByIdAndDelete(req.params._id);
  if (!board) return res.status(400).send("Process failed: Task not found");
  return res.status(200).send("task deleted");
};

module.exports = { saveTask, listTask, updateTask, deleteTask };
