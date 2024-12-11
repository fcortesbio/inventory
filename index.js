const express = require("express");

const app = express()

PORT = 3000; 

app.set("port", PORT)

app.get("/gr eet", (req, res)=>{
    res.send("Hello, World!")
})

app.listen(PORT, ()=>{
    console.log(`Listening port ${PORT}`)
})

