var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');


var middlewares = require('./middlewares/index');
var routes = require('./routes/index');

var app = express();
app.disable('x-powered-by');

// ############ MIDDLEWARES ########
app.use(bodyParser.json({ extended: true }));
app.use(session({
    secret: process.env.COOKIESECRET,
    cookie: { maxAge: 60000}
}));

app.use()

app.route("/user")
    .post(routes.user.add)
    .get(route.user.get)
    .update(route.user.update)
    .dell(route.user.dell);

app.route("")

app.listen(process.env.PORT || 3000);