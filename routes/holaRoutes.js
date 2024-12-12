// Importar el framework Express.js
const express = require("express");

// Crear un nuevo objeto 'router'. Esto permite definir rutas de forma modular.
const router = express.Router();

// Definir una ruta para las solicitudes GET a la ruta raíz ('/').
// En este caso, el manejador de la ruta está definido directamente aquí.
router.get("", (req, res) => {
    console.log("Hola desde Routes"); // Registrar un mensaje en la consola.
    res.send("Respuesta desde Routes"); // Enviar la respuesta "Respuesta desde Routes" al cliente.
});

// Importar el controlador que contiene la lógica para manejar las solicitudes
const holaController = require("../controllers/holaControllers"); 

// Definir una ruta para las solicitudes GET a la ruta '/test'.
// Esta ruta es manejada por la función `holaMundo` en el `holaController`.
router.get("/test", holaController.holaMundo); 

// Exportar el router para que pueda ser utilizado en otras partes de tu aplicación (como index.js)
module.exports = router;

