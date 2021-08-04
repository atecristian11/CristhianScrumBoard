//con esta linea traemos la libreria de mongodb que es la encargada de gestionar todo lo de la misma
const mongoose = require("mongoose");

//creamos una funcion flecha para que nos ayude a conectar la base de datos y el async sirve para ejecutarse varias cosas a la vez
const dbConnection = async () => {
  //este lo utilizamos para pasar un error que desconocemos a uno que si tengamos identificado
  try {
    //espera que de una respuesta para asi ejecutar algo
    await mongoose.connect(process.env.BD_CONNECTION, {
        useNewUrlParser: true, //cada vez que se ejecuta algo de mongo esas rutas de url que se manejen van estar encriptada y una nueva por proceso
        useFindAndModify: false, //cuando se quiera buscar o editar sale un alerta de lo que hicimos por eso se deshabilita para que nos deje hacerlo sin que nos diga nada
        useCreateIndex: true, //crea un indice para cada uno de las propiedades que hagamos es decir cada buscar, actualizar el los guarda
        useUnifiedTopology: true, //con esta unifica toda la escritura de mongo en un simple mensaje de respuesta
    }); //el process saca de los .env las variables que necesitemos en este caso fue la variable de la url
    console.log("Connection with MongoDB: ON"); //con este mostramos que nos conectamos adecuadamente a la bd por consola
  } catch (e) {
      console.log("Error connectiong to MongoDB: ",e); //con este mostramos en la consola el error de conexion a la bd
      throw new Error ("Error connectiong to MongoDB."); //con esta linea nos va a mostrar este mensaje en la consola de una manera mas entendible y bonita
  }
};

module.exports = { dbConnection }; //con este exportamos esta funcion para asi poder acceder desde cualquier otro archivo
