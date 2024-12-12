// Export the `holaMundo` function, making it available for use in other modules (like your routes file).
exports.holaMundo = (req, res) => { 
    console.log("hola desde controller"); // Log a message to the console.
    res.send("Hola mundo desde controller"); // Send the response "Hola mundo desde controller" to the client.
};