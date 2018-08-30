var controllers = require('../controllers/index');
var middlwares = require('../middlwares/index');

function addUser(req, res) {
    try {
        middlwares.user.addUser(req);
        controllers.user.addUser(req, res);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}
function getUser(req, res) {
    try {
        controllers.user.getUser(req, res);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}
function updateUser(req, res) {
    try {
        controllers.user.updateUser(req, res);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}
function deleteUser(req, res) {
    try {
        controllers.user.deleteUser(req, res);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

module.exports = { addUser, getUser, updateUser, deleteUser };