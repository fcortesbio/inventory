// Exportar la función `obtenerInventario`
exports.obtenerInventario = (req, res)=> {    
    console.log("Hola desde controllers/inventario.js"); // Registrar un mensaje en la consola.
    res.send("Respuesta desde controllers/inventario.js"); // Enviar la respuesta "Respuesta desde controllers" al cliente.
}

HerramientaSchema = require("../models/inventario")

exports.crearHerramienta = async (req, res) => {
    try {
        await HerramientaSchema.create({
            nombre: req.body.nombre, 
            unidades: req.body.unidades
        })
        res.status(201).send("Herramienta Creada");

    } catch (error) {
        console.log(error)
        return res.status(500).send(error.message);
    }
}