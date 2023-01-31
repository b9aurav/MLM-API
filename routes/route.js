var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

router.post("/api/GetUsers", userController.getUsers);
router.post("/api/AddUser", userController.addUser);
router.post("/api/ChangeUserPassword", userController.changeUserPassword);

module.exports = router;