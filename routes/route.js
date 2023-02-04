var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');
var ticketController = require('../controllers/ticketController');
var payoutController = require('../controllers/payoutController');

router.post("/api/GetUsers", userController.getUsers);
router.post("/api/GetUserDetails", userController.getUserDetails);
router.post("/api/AddUser", userController.addUser);
router.post("/api/ChangeUserPassword", userController.changeUserPassword);

router.post("/api/GetTickets", ticketController.getTickets);
router.post("/api/AddTicket", ticketController.addTicket);
router.post("/api/DeleteTicket", ticketController.deleteTicket);

router.post("/api/GetWithdrawRequests", payoutController.getWithdrawRequests);
router.post("/api/WithdrawRequest", payoutController.withdrawRequest);
router.post("/api/DeleteWithdrawRequest", payoutController.deleteWithdrawRequest);

module.exports = router;