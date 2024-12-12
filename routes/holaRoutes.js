// Import the Express.js framework
const express = require("express");

// Create a new router object. This allows you to define routes in a modular way.
const router = express.Router();

// Import the controller that contains the logic for handling requests
const holaController = require("../controllers/controllershola"); 

// Define a route for GET requests to the '/test' path.
// This route is handled by the `holaMundo` function in the `holaController`.
router.get("/test", holaController.holaMundo); 

// Export the router so it can be used in other parts of your application (like index.js)
module.exports = router;

// This is a commented-out example of how you could define the route handler directly 
// within the routes file instead of using a controller.
// router.get("/test",(req,res)=>{
//     console.log("hola desde routes")
//     res.send("Hola mundo desde routes")
// })