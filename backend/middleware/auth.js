//code auth
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  //el next sirve para que despues de retornar la respuesta de que se autentico siga con otra validacion

  let jwtToken = req.header("Authorization"); //con este accedemos a la pestaña de autorizacion del postman
  if (!jwtToken) return res.status(400).send("Authorization denied: No token"); //si no detecta que tiene el token sale este mensaje de error

  //[Bearer,6465yyfjyfyf65445]
  //   0   ,       1
  jwtToken = jwtToken.split(" ")[1]; //el split divide o separa lo que yo quiera y para ver cuantos campos tiene el array que creamos con el split se va a la pestaña Headers del postman
  //6465yyfjyfyf65445 despues del split colocamos el 1 ya que alli se guarda el token y eso es lo que necesitamos que nos retorne
  if (!jwtToken) return res.status(400).send("Authorization denied: No token");

  try {
    const payload = await jwt.verify(jwtToken, process.env.SECRET_KEY_JWT); //con el verify miramos si el jstToken si es valido y tambien miramos que si tenga la palabra clave que nosotros hemos creado y el payload es el cuerpo del json que tenemos creado en el modelo user
    req.user = payload; //aqui le asignamos el payload al usuario que se esta loguiando si todo esta bien
    next(); //con este continua con el proceso que el desee
} catch (e) {
    return res.status(400).send("Authorization denied: Invalid token");
  }
};

module.exports = auth; //se le quitan las llaves ya que son middleware y estos no pueden tener llaves en la funcion o sino sale un error 
