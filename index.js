const express = require("express");
const holaRoutes = require("./routes/holaRoutes");
const app = express(); 

const PORT = 3000;
app.set("port", PORT); 

app.get("/hola", (req, res) => { 
    res.send("Hello, World!");
});

app.use("/api/hola", holaRoutes); 

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});