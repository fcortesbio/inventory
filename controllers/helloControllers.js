const express = require('express')
const router = express.Controller()

router.get("/testControllers", (req, res)=>{
    console.log("Hello from controllers!")
})

module.exports