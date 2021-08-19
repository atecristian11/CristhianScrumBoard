const express = require("express");
const router = express.Router();
const BoardController = require("../controllers/board");
const Auth = require("../middleware/auth"); //traemos los middleware de seguridad que creamos
const ValidateUser = require("../middleware/validateUser");

router.post("/saveTask", Auth, ValidateUser, BoardController.saveTask); //con esto solo pueden crear tareas si estan logueados
router.get("/listTask", Auth, ValidateUser, BoardController.listTask);
router.put("/updateTask", Auth, ValidateUser, BoardController.updateTask);
router.delete(
  "/deleteTask/:_id",
  Auth,
  ValidateUser,
  BoardController.deleteTask
);

module.exports = router;
