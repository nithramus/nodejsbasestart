var utils = require('../utils/index');

function addUserValidParameters(req) {
    var body = req.body;
    utils.verification.verifString(body.pseudo, true, 4, 25);
    utils.verification.verifString(body.mail, true, 4, 70);
    utils.verification.verifString(body.password, true, 8, 80);
    return {
        pseudo: body.pseudo,
        mail: body.mail,
        password: body.password,
    }
}

module.exports = { addUserValidParameters }