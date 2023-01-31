var serverConfig = require('../config.js')
var sql = require("mssql");

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
                    return res.status(200).send(result.recordset);
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
                    return res.status(200).send(result.recordset);
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
                    return res.status(200).send(result.recordset);
                }
            });
        }
    });
};