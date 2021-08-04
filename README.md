# CristhianScrumBoard

Configuracion de servidor

1. Lo primero que hacemos es crear la carpeta donde vamos almacenar el proyecto
2. Luego ingresamos a esta y le damos npm init para que nos cree nuestro proyecto
3. Despues le descargamos los framework que necesitemos con npm i librerias --save
4. Luego descargamos los framework que necesitemos para el desarrollo con npm i librerias --save-dev
5. Luego creamos un archivo en la raiz de la carpeta que se llame .gitignore y le agregamos /backend/node_modules y /frontend/node_modules para que asi no suba esta carpeta 
6. Luego nos ubicamos en backend y creamos un archivo que se llame index.js el cual es el archivo principal
7. Despues creamos un archivo .env dentro de la carpeta de backend para alli crear nuestras variables de entorno las cuales se pueden utilizar en todo el proyecto solo llamando este archivo (la libreria que nos ayuda reconociendo las variables de entorno es nodemon)
8. Luego en el archivo .env le ponemos estas variables PORT = 3111
BD_CONNECTION = mongodb://localhost:27017/bdcristhian
SECRET_KEY_JWT = cristhiancode11
9. Luego dentro de bakend creamos otra carpeta llamada bd y dentro de esta creamos un archivo que se llame db.js el cual sirve para hacer el codigo de conexion a la base de datos
10. y ya con esto tenemos lista la configuracion y ya despues tenemos que conectar la base de datos, crear y ejecutar nuestro servidor
