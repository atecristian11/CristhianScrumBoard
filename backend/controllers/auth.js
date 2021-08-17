const bcrypt = require("bcrypt");
const User = require("../models/user");

const login = async (req, res) => {
  let user = await User.findOne({ email: req.body.email }); //con este validamos que si coloque el correo para uniciar sesion
  if (!user) return res.status(400).send("Incorrect email or password"); //si coloca mal el correo le sale esta alerta

  const hash = await bcrypt.compare(req.body.password, user.password); //con este comparamos que la clave que ingresa el usaurio si es la misma que tenemos en nuestra bd
  if (!hash) return res.status(400).send("Incorrect email or password"); //si coloca mal la clave le sale esta alerta

  try {
    const jwtToken = user.generateJWT(); //con este encriptamos la info que dijite el usuario en un jsonwebtoken
    return res.status(200).send({ jwtToken }); //con este le mostramos al usaurio el jsonwebtoken
} catch (e) {
    return res.status(400).send("login error");
  }
};

module.exports = { login };