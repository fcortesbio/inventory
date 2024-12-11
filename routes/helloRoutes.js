const express = require('express')
const router = express.Router()

router.get("/testControllers", (req, res)=>{
    console.log("Hello from controllers!")
})

module.exports