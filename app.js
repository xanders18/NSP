const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const bp = require('body-parser')

//Socket
const app = express()
const server = require('http').createServer(app)
const io = require("socket.io").listen(server)
const test = require('./test')

test.init(io)
test.get("dataass")

//Session
const session = require('express-session');
const mongoSession = require('connect-mongodb-session')(session)

//Error Handler
const flash = require('connect-flash')


const homeRoute = require('./Routes/home')
const accountRoute = require('./Routes/account')
const chatRoute = require('./Routes/chat')

const dbURL = "mongodb+srv://dominic:kelas6b@cluster0-eja7z.mongodb.net/nsp?retryWrites=true&w=majority"


//Create new connection in database to save Session
const storeSession = new mongoSession({
    uri: dbURL,
    collection: 'Session'
})

//Initialization
app.set("view engine", "pug");
app.set("views", "View");
app.use(express.static(path.join(__dirname, "View")))
app.use(bp.urlencoded({ extended: false }));
app.use(session({
    secret: "MYSUPErSecr3tS3s10nn!",
    resave: false,
    saveUninitialized: false,
    store: storeSession
}))
app.use(flash())


app.use((req, res, next) => {
    req.logedIn = req.session.login
    req.user_email=req.session.email
    next()
})

//Routing
app.use("/chat", chatRoute)
app.use("/user", accountRoute)
app.use("/", homeRoute)


//Turn on Server
mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(result => {
        server.listen(9000, () => {
            console.log("Connected")
        })
    })

