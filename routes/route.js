var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');
var ticketController = require('../controllers/ticketController');
var payoutController = require('../controllers/payoutController');
var teamController = require('../controllers/teamController');
var depositController = require('../controllers/depositController');
var earningController = require('../controllers/earningController');

// Users
router.post("/api/GetUsers", userController.getUsers);
router.post("/api/GetUserDetails", userController.getUserDetails);
router.post("/api/AddUser", userController.addUser);
router.post("/api/ChangeUserPassword", userController.changeUserPassword);
router.post("/api/ValidateUser", userController.validateUser);
router.post("/api/KYCRequest", userController.KYCRequest);

router.post("/api/GetTickets", ticketController.getTickets);
router.post("/api/AddTicket", ticketController.addTicket);
router.post("/api/DeleteTicket", ticketController.deleteTicket);

router.post("/api/GetWithdrawRequests", payoutController.getWithdrawRequests);
router.post("/api/WithdrawRequest", payoutController.withdrawRequest);
router.post("/api/DeleteWithdrawRequest", payoutController.deleteWithdrawRequest);

router.post("/api/GetDirectTeam", teamController.getDirectTeam);
router.post("/api/GetTeamByLevel", teamController.getTeamByLevel);

router.post("/api/DepositRequest", depositController.depositRequest);
router.post("/api/GetDepositRequests", depositController.getDepositRequests);
router.post("/api/DeleteDepositRequest", depositController.deleteDepositRequest);

router.post("/api/GetDirectEarnings", earningController.getDirectEarnings);
router.post("/api/GetIncomeByLevel", earningController.getIncomeByLevel);

// Admins
router.post("/api/GetPendingTickets", ticketController.getPendingTickets);
router.post("/api/GetRespondedTickets", ticketController.getRespondedTickets);
router.post("/api/respondTicket", ticketController.respondTicket);

router.post("/api/GetPendingKYCRequests", userController.getPendingKYCRequests);
router.post("/api/ApproveKYC", userController.approveKYC);
router.post("/api/GetApprovedKYCRequests", userController.getApprovedKYCRequests);
router.post("/api/DeactivateUser", userController.deactivateUser);

router.post("/api/GetPendingWithdrawRequests", payoutController.getPendingWithdrawRequests);
router.post("/api/RespondWithdrawRequest", payoutController.respondWithdrawRequest);
router.post("/api/GetRespondedWithdrawRequests", payoutController.getRespondedWithdrawRequests);

router.post("/api/GetPendingDepositRequests", depositController.getPendingDepositRequests);
router.post("/api/RespondDepositRequest", depositController.respondDepositRequest);
router.post("/api/GetRespondedDepositRequests", depositController.getRespondedDepositRequests);

module.exports = router;