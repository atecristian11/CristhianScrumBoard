const express = require("express"); //con este nos traemos la libreria de express para convertir esto en un servidor
const cors = require("cors"); //con esta traemos la libreria de las reglas para la bd y el front
const { dbConnection } = require("./db/db"); //necesitamos que cuando se ejecute el servidor nos conecte con mongodb y para eso lo hacemos con esta linea
const Role = require("./routes/role"); //aqui traemos el modulo de rol del routes
const User = require("./routes/user");
require("dotenv").config(); //con este traemos la libreria de dotenv para cconfigurar las variables de entorno

const app = express(); //con esta creamos nuestro servidor que funciona gracias a todo lo que trae express
app.use(express.json()); //todo lo que va ha manipular nuestro servidor va hacer en pruo json
app.use(cors()); //para las reglas de conexion a nuestro backend
app.use("/api/role", Role); //luego le decimos que utilice todo el sistema de routes
app.use("/api/user", User);

app.listen(process.env.PORT, () =>
  console.log("Backend server running OK, on port:", process.env.PORT)
); //con esta le estamos indicando por el puerto que se va ejecutar y un mensaje para cuando se ejecute el servidor

dbConnection(); //con esta nos conectamos a la base de datos
