const express = require("express");
const {obtenerInventario} = require("../controllers/inventario"); //desestructurar
const router = express.Router();

router.get("/", obtenerInventario)

module.exports = router; 