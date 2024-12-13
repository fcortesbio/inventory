// Exportar la función `obtenerInventario`
exports.obtenerInventario = (req, res)=> {    
    console.log("Hola desde controllers/inventario.js"); // Registrar un mensaje en la consola.
    res.send("Respuesta desde controllers/inventario.js"); // Enviar la respuesta "Respuesta desde controllers" al cliente.
}
