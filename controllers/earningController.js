var serverConfig = require('../config.js')
var sql = require("mssql");

// Get Direct Earnings
/*
PARAMETERS :
{
    "param": {
        "user_id": ""
    }
}
*/
exports.getDirectEarnings = function (req, res) {
    var param = req.body.param;
    sql.connect(serverConfig, function (err) {
        if (err) console.error(err);
        else {
            var request = new sql.Request();
            request.input("user_id", sql.VarChar, param.user_id);
            request.output('referrals', sql.NVarChar(sql.MAX))
            request.output('earnings', sql.NVarChar(sql.MAX))
            request.output('Message', sql.NVarChar(sql.MAX))
            request.execute("GetDirectEarnings", function (err, result) {
                if (err) {
                    console.error(err);
                    sql.close();
                    return res.status(500).send(err);
                } else {
                    sql.close();
                    console.info(result.output.Message)
                    return res.status(200).send({
                        message: result.output.Message,
                        referrals: result.output.referrals,
                        earnings: result.output.earnings,
                        data: result.recordset
                    });
                }
            });
        }
    });
};
