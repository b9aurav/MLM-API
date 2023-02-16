var serverConfig = require('../config.js')
var sql = require("mssql");

// Get Direct Team
/*
PARAMETERS :
{
    "param": {
        "user_id": ""
    }
}
*/
exports.getDirectTeam = function (req, res) {
    var param = req.body.param;
    sql.connect(serverConfig, function (err) {
        if (err) console.error(err);
        else {
            var request = new sql.Request();
            request.input('user_id', sql.VarChar, param.user_id);
            request.output('Message', sql.NVarChar(sql.MAX))
            request.execute("GetDirectTeam", function (err, result) {
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

// Get Level Team
/*
PARAMETERS :
{
    "param": {
        "user_id": "",
        "level": ,
    }
}
*/
exports.getTeamByLevel = function (req, res) {
    var param = req.body.param;
    sql.connect(serverConfig, function (err) {
        if (err) console.error(err);
        else {
            var request = new sql.Request();
            request.input('user_id', sql.VarChar, param.user_id);
            request.input('level', sql.VarChar, param.level);
            request.output('Message', sql.NVarChar(sql.MAX))
            request.execute("GetTeamByLevel", function (err, result) {
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