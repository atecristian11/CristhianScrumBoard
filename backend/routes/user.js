const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");
const Auth = require("../middleware/auth"); //traemos los middleware de seguridad que creamos
const ValidateUser = require("../middleware/validateUser");

router.post("/registerUser", UserController.registerUser);
router.get("/listUser/:name?", Auth, ValidateUser, UserController.listUser); //con esto solo pueden listar los usuarios si estan logueados

module.exports = router;
