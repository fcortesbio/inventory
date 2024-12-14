const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const InventarioSchema = new Schema({
    nombre: {
        type:String,
        required:true, 
        maxLength:100,
    },
    unidades: {
        type: Number, 
        default: 0
    }
})

// Contrato? 

module.exports = mongoose.model("Herramienta", HerramientaSchema)

