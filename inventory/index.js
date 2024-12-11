// import Express.js
const express = require("express");


// Create instance from Express
const app = express()

// select Port
PORT = 3000; 

app.set("port", PORT)

// .get("/greet,   --> define a route and a 'HTTP-verb' (get) 
// (req, res) --> define a function and an HTTP 
app.get("/gr eet", (req, res)=>{
    res.send("Hello, World!")
})

app.listen(PORT, ()=>{
    console.log(`Listening port ${PORT}`)
})

