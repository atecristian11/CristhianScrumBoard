const express = require("express");
const router = express.Router();
const BoardController = require("../controllers/board");
const Auth = require("../middleware/auth"); //traemos los middleware de seguridad que creamos
const ValidateUser = require("../middleware/validateUser");

router.post("/saveTask", Auth, ValidateUser, BoardController.saveTask); //con esto solo pueden crear tareas si estan logueados

module.exports = router;
