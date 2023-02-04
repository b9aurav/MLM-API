var serverConfig = require('../config.js')
var sql = require("mssql");

// Get Requests by User
/*
PARAMETERS :
{
    "param": {
        "user_id": ""
    }
}
*/
exports.getWithdrawRequests = function (req, res) {
    var param = req.body.param;
    sql.connect(serverConfig, function (err) {
        if (err) console.error(err);
        else {
            var request = new sql.Request();
            request.input("user_id", sql.VarChar, param.user_id);
            request.output('Message', sql.NVarChar(sql.MAX))
            request.execute("GetWithdrawRequests", function (err, result) {
                if (err) {
                    console.error(err);
                    sql.close();
                    return res.status(500).send(err);
                } else {
                    sql.close();
                    console.info(result.output.Message)
                    return res.status(200).send({
                        message: result.output.Message,
                        data: result.recordset
                    });
                }
            });
        }
    });
};

// Add Withdraw Request
/*
PARAMETERS :
{
    "param": {
        "payout": "",
        "remarks": "",
        "user_id": ""
    }
} 
*/
exports.withdrawRequest = function (req, res) {
    var param = req.body.param;
    sql.connect(serverConfig, function (err) {
        if (err) console.error(err);
        else {
            var request = new sql.Request();
            request.input("payout", sql.VarChar, param.payout);
            request.input("remarks", sql.VarChar, param.remarks);
            request.input("user_id", sql.VarChar, param.user_id);
            request.output('Message', sql.NVarChar(sql.MAX))
            request.execute("WithdrawRequest", function (err, result) {
                if (err) {
                    console.error(err);
                    sql.close();
                    return res.status(500).send(err);
                } else {
                    sql.close();
                    console.info(result.output.Message)
                    return res.status(200).send({
                        message: result.output.Message,
                        data: result.recordset
                    });
                }
            });
        }
    });
};

// Delete Withdraw Request
/*
PARAMETERS :
{
    "param": {
        "request_id": "",
    }
}
*/
exports.deleteWithdrawRequest = function (req, res) {
    var param = req.body.param;
    sql.connect(serverConfig, function (err) {
        if (err) console.error(err);
        else {
            var request = new sql.Request();
            request.input("request_id", sql.VarChar, param.request_id);
            request.output('Message', sql.NVarChar(sql.MAX))
            request.execute("DeleteWithdrawRequest", function (err, result) {
                if (err) {
                    console.error(err);
                    sql.close();
                    return res.status(500).send(err);
                } else {
                    sql.close();
                    console.info(result.output.Message)
                    return res.status(200).send({
                        message: result.output.Message,
                        data: result.recordset
                    });
                }
            });
        }
    });
};