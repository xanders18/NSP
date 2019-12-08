const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const bp = require('body-parser')

//Socket
const app = express()
const server = require('http').createServer(app)
const io = require("socket.io").listen(server)
const test = require('./test')(io)


//Error Handler
const flash=require('connect-flash')


const homeRoute = require('./Routes/home')
const accountRoute = require('./Routes/account')
const chatRoute = require('./Routes/chat')

const dbURL = "mongodb+srv://dominic:kelas6b@cluster0-eja7z.mongodb.net/nsp?retryWrites=true&w=majority"


app.set("view engine", "pug");
app.set("views", "View");

app.use(express.static(path.join(__dirname, "View")))
app.use(bp.urlencoded({ extended: false }));
app.use((req, res, next) => {
    req.val = "wes"
    next()
})
app.use(flash())

app.use("/chat", chatRoute)
app.use("/user", accountRoute)
app.use("/", homeRoute)

mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(result => {
        server.listen(9000, () => {
            console.log("Connected")
        })
    })

