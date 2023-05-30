var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');
var ticketController = require('../controllers/ticketController');
var payoutController = require('../controllers/payoutController');
var teamController = require('../controllers/teamController');

// Users
router.post("/api/GetUsers", userController.getUsers);
router.post("/api/GetUserDetails", userController.getUserDetails);
router.post("/api/AddUser", userController.addUser);
router.post("/api/ChangeUserPassword", userController.changeUserPassword);
router.post("/api/ValidateUser", userController.validateUser);

router.post("/api/GetTickets", ticketController.getTickets);
router.post("/api/AddTicket", ticketController.addTicket);
router.post("/api/DeleteTicket", ticketController.deleteTicket);

router.post("/api/GetWithdrawRequests", payoutController.getWithdrawRequests);
router.post("/api/WithdrawRequest", payoutController.withdrawRequest);
router.post("/api/DeleteWithdrawRequest", payoutController.deleteWithdrawRequest);

router.post("/api/GetDirectTeam", teamController.getDirectTeam);
router.post("/api/GetTeamByLevel", teamController.getTeamByLevel);

// Admins
router.post("/api/GetPendingTickets", ticketController.getPendingTickets);
router.post("/api/GetRespondedTickets", ticketController.getRespondedTickets);
router.post("/api/respondTicket", ticketController.respondTicket);

module.exports = router;