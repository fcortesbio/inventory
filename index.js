const express = require("express");
const app = express(); 
const PORT = 3000;

app.set("port", PORT); // Set the port (good practice for configuration)

app.get("/greet", (req, res) => { 
    res.send("Hello, World!");
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
