const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const fileUpload = require('express-fileupload');
const RedisStore = require('connect-redis')(session);
require('express-async-errors');


// const usersPublic = require('./users/users.public.js');
// const usersMiddleware = require('./users/users.middlewares');
// const roomsMiddleware = require('./rooms/rooms.middlewares')

// const usersRouter = require('./users/users.router');
// const roomsRouter = require('./rooms/rooms.router');
// const pingsRouter = require('./pings/pings.router');
// const commentsRouter = require('./comments/comments.router');

const app = express();
app.disable('x-powered-by');
// app.use(express.static('./static'));
    
// ############ MIDDLEWARES ########

app.use(bodyParser.json({ extended: true }));
app.use(fileUpload());
app.use(session({
    store: new RedisStore(),
    secret: process.env.COOKIESECRET,
    saveUninitialized: false
}));

// app.post("/user", usersPublic.addUser);
// app.post("/user/login", usersPublic.loginUser);
// app.post('/user/login/android/google', usersPublic.loginWithGoogle)

// All user must be connected
app.use(usersMiddleware.isLogged);
// app.use("/room/:roomId", roomsMiddleware.userGotAccess);
// app.use("/", usersRouter);
// app.use("/", pingsRouter);
// app.use("/", commentsRouter);
// app.use("/", roomsRouter);

function test() {
    throw new Error('yolo');
}

app.use(async(err, req, res, next) => {
    console.error(err.stack);
    console.error(err.message);
    await res.status(500).send({ status: 500, message: err.message });
    });
app.use('*', async(req, res, next) => {
    console.log("404", req.route, req.params);
    await res.status(404).send({ status: 404, message: "Undefined road" });
});

  

module.exports = app;