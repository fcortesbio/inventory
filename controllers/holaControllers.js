// Exportar la función `holaMundo`, haciéndola disponible para su uso en otros módulos (como tu archivo de rutas).
exports.holaMundo = (req, res) => { 
    console.log("Hola desde Controllers"); // Registrar un mensaje en la consola.
    res.send("Respuesta desde controllers"); // Enviar la respuesta "Respuesta desde controllers" al cliente.
};