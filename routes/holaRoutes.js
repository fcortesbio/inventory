const express = require('express');
const router = express.Router();
const holaController = require('../controllers/holaControllers'); // Import the controller

router.get("/test", holaController.test); // Use the controller function

module.exports = router;