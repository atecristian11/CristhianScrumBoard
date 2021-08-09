const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema({
  //creamos el esquema del board que va tener en la bd

  userId: { type: mongoose.Schema.ObjectId, ref: "user" }, //aqui le indicamos que este campo es de tipo object id y va estar asignado al id del usaurio segun este en el modelo user
  name: String,
  description: String,
  taskStatus: String,
  imageUrl: String,
  date: { type: Date, default: Date.now },
});

const board = mongoose.model("board", boardSchema); //aqui se convierte esto en un modulo para luego exportarlo
module.exports = board;
