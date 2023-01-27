var config = requre('../config.js')
exports.getUsers = function (req, res) {
    sql.connect(config.serverConfig, function (err) {
        if (err) console.log(err);
        else {
            var request = new sql.Request();
            request.execute("GetUsers", function (err, result) {
                if (err) {
                    console.log(err);
                    sql.close();
                    return res.status(201).send(err);
                } else {
                    sql.close();
                    return res.status(200).send(result.recordset);
                }
            });
        }
    });
};