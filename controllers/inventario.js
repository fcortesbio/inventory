HerramientaSchema = require("../models/inventario")

exports.obtenerInventario = async (req, res)=> {    
    try {
        const inventario = await HerramientaSchema.find({})
        res.json(inventario).status(200)
    }
    catch (error) {
        console.log(error)
        return res.status(500).send(error)
    }
    // console.log("Hola desde controllers/inventario.js"); // Registrar un mensaje en la consola.
    // res.send("Respuesta desde controllers/inventario.js"); // Enviar la respuesta "Respuesta desde controllers" al cliente.
}

exports.crearHerramienta = async (req, res) => {
    try {
        await HerramientaSchema.create({
            nombre: req.body.nombre, 
            unidades: req.body.unidades
        })
        res.status(201).send("Herramienta Creada")
        console.log("Herramienta creada");

    } catch (error) {
        console.log(error)
        return res.status(500).send(error.message);
    }
}
