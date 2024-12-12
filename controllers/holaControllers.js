const test = (req, res) => {
    console.log("Hola desde Controller!"); 
    res.send("Hola desde Controller!"); 
};

module.exports = { test }; 