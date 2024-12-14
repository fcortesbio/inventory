const express = require("express"); // Importar el framework Express.js
const mongoose = require("mongoose"); // import Mongoosese
require("dotenv").config() // 

const holaRoutes = require("./routes/holaRoutes"); // Importar las rutas definidas en holaRoutes.js
const inventarioRoutes = require("./routes/inventario"); // import inventarioRoutes
const app = express(); // Crear una instancia de la aplicación Express
const PORT = 3000;   // Definir el número de puerto para el servidor
app.set("port", PORT); // Establecer la propiedad 'port' en la configuración de la aplicación Express (buena práctica para la configuración)
app.get("/hola", (req, res) => { // Definir una ruta para las solicitudes GET a la ruta '/hola'
    console.log("Hola, Mundo!")
    res.send("Respuesta desde index"); // Enviar la respuesta "Respuesta desde /hola" al cliente
}); 

app.use(express.json()) // Middleware for json file read

// Rutas
app.use("/api/routers", holaRoutes); 
app.use("/api/inventario", inventarioRoutes);

mongoose.connect("mongodb+srv://fcortesbio:easy2remember@mycluster.sckwr.mongodb.net/")
// mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Database connected"))
.catch((err)=>console.error(err))

app.listen(PORT, () => { // Iniciar el servidor y escuchar en el puerto especificado
    console.log(`Escuchando en el puerto ${PORT}`); // Registrar un mensaje en la consola
});

