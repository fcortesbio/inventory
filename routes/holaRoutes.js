const express = require("express"); // Importar el framework Express.js  

const router = express.Router(); // Crear un nuevo objeto 'router'. Esto permite definir rutas de forma modular.

router.get("", (req, res) => {
    console.log("Hola desde Routes"); // Registrar un mensaje en la consola.
res.send("Respuesta desde Routes");  // Enviar la respuesta "Respuesta desde Routes" al cliente.
}); // router define una ruta para las solicitudes GET a la ruta raíz ('/'). En este caso, el manejador de la ruta está definido directamente aquí.

const holaController = require("../controllers/holaControllers");   // Importar el controlador que contiene la lógica para manejar las solicitudes
const inventarioController = require("../controllers/inventario")

router.get("/test", holaController.holaMundo);  // Definir una ruta para las solicitudes GET a la ruta '/test'. Esta ruta es manejada por la función `holaMundo` en el `holaController`.  
router.get("/inventario", inventarioController.obtenerInventario) // current path: routers/controllers 

module.exports = router; // Exportar el router para que pueda ser utilizado en otras partes de tu aplicación (como index.js)