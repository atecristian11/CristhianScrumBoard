const express = require("express");
const router = express.Router(); //con esta se manipulan rutas para asi acceder a las api
const RoleController = require("../controllers/role"); //con esta importamos el rol del controlador
const Auth = require("../middleware/auth"); //traemos los middleware de seguridad que creamos
const ValidateUser = require("../middleware/validateUser");
const Admin = require("../middleware/admin");

//GET POST PUT DELETE
// http://localhost:3111/api/role/registerRole
router.post("/registerRole", Auth, ValidateUser, Admin, RoleController.registerRole); //con el post porque con este le añadimos esto a la url final
// http://localhost:3111/api/role/listRole
router.get("/listRole", Auth, ValidateUser, Admin, RoleController.listRole); //con el get porque se necesita consultar los roles

module.exports = router;
