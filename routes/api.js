var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

router.post("/api/GetUsers", userController.getUsers());

module.exports = router;

// app.post("/api/GetUsers", );