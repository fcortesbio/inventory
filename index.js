// Importar el framework Express.js
const express = require("express");

// Importar las rutas definidas en holaRoutes.js
const holaRoutes = require("./routes/holaRoutes"); 
const inventarioRoutes = require("./routes/inventario") // import inventarioRoutes


// Crear una instancia de la aplicación Express
const app = express(); 

// Definir el número de puerto para el servidor
const PORT = 3000; 

// Establecer la propiedad 'port' en la configuración de la aplicación Express (buena práctica para la configuración)
app.set("port", PORT); 

// Definir una ruta para las solicitudes GET a la ruta '/hola'
app.get("/hola", (req, res) => {
    res.send("Respuesta desde Hola"); // Enviar la respuesta "Respuesta desde /hola" al cliente
});

// Montar el enrutador holaRoutes en la ruta '/api/hola'.
// Esto significa que todas las rutas definidas en holaRoutes.js tendrán el prefijo '/api/hola'
app.use("/api/routers", holaRoutes); 

// Iniciar el servidor y escuchar en el puerto especificado
app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`); // Registrar un mensaje en la consola
});