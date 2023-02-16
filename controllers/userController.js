var serverConfig = require('../config.js')
var sql = require("mssql");
var passwordHash = require('password-hash');

// Get Users
exports.getUsers = function (req, res) {
    sql.connect(serverConfig, function (err) {
        if (err) console.error(err);
        else {
            var request = new sql.Request();
            request.output('Message', sql.NVarChar(sql.MAX))
            request.execute("GetUsers", function (err, result) {
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

// Get User Details
/*
PARAMETERS :
{
    "param": {
        "username": ""
    }
}
*/
exports.getUserDetails = function (req, res) {
    var param = req.body.param;
    sql.connect(serverConfig, function (err) {
        if (err) console.error(err);
        else {
            var request = new sql.Request();
            request.input("username", sql.VarChar, param.username);
            request.output('Message', sql.NVarChar(sql.MAX))
            request.execute("GetUserDetails", function (err, result) {
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

// Add User
/*
PARAMETERS :
{
    "param": {
        "username": "",
        "name": "",
        "phone": ,
        "email": "",
        "sponsor_id": "",
        "password": ""
    }
} 
*/
exports.addUser = function (req, res) {
    var param = req.body.param;
    sql.connect(serverConfig, function (err) {
        if (err) console.error(err);
        else {
            var request = new sql.Request();
            request.input("username", sql.VarChar, param.username);
            request.input("name", sql.VarChar, param.name);
            request.input("phone", sql.VarChar, param.phone);
            request.input("email", sql.VarChar, param.email);
            request.input("sponsor_id", sql.VarChar, param.sponsor_id);
            request.input("password", sql.VarChar, param.password);
            request.output('Message', sql.NVarChar(sql.MAX))
            request.execute("AddUser", function (err, result) {
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

// Change Password
/*
PARAMETERS :
{
    "param": {
        "username": "",
        "OldPassword": "",
        "NewPassword": ""
    }
}
*/
exports.changeUserPassword = function (req, res) {
    var param = req.body.param;
    sql.connect(serverConfig, function (err) {
        if (err) console.error(err);
        else {
            var request = new sql.Request();
            request.input("username", sql.VarChar, param.username);
            request.input("OldPassword", sql.VarChar, param.OldPassword);
            request.input("NewPassword", sql.VarChar, param.NewPassword);
            request.output('Message', sql.NVarChar(sql.MAX))
            request.execute("ChangeUserPassword", function (err, result) {
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

// Validate User
/*
PARAMETERS :
{
    "param": {
        "username": "",
        "password": ""
    }
}
*/
exports.validateUser = function (req, res) {
    var param = req.body.param;
    sql.connect(serverConfig, function (err) {
        if (err) console.error(err);
        else {
            var request = new sql.Request();
            request.input("username", sql.VarChar, param.username);
            request.input("password", sql.VarChar, param.password);
            request.output('Message', sql.NVarChar(sql.MAX))
            request.execute("ValidateUserLogin", function (err, result) {
                if (err) {
                    console.error(err);
                    sql.close();
                    return res.status(500).send(err);
                } else {
                    sql.close();
                    console.info(result.output.Message)
                    var responseData = {
                        message: result.output.Message,
                        data: result.recordset,
                    }
                    if (result.output.Message == 'Info  : Login validated') {
                        responseData.message = passwordHash.generate(param.username + param.password);
                    }
                    return res.status(200).send(responseData);
                }
            });
        }
    });
};

