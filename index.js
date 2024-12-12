// Import the Express.js framework
const express = require("express");

// Import the routes defined in holaRoutes.js
const holaRoutes = require("./routes/holaRoutes"); 

// Create an instance of the Express application
const app = express(); 

// Define the port number for the server
const PORT = 3000; 

// Set the 'port' property in the Express app's settings (good for configuration)
app.set("port", PORT); 

// Define a route for GET requests to the '/hola' path
app.get("/hola", (req, res) => {
    res.send("hola mundo"); // Send the response "hola mundo"
});

// Mount the holaRoutes router at the '/api/hola' path. 
// This means all routes defined in holaRoutes.js will be prefixed with '/api/hola'
app.use("/api/hola", holaRoutes); 

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`); // Log a message to the console
});