const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const bp = require('body-parser')

const app = express()

const homeRoute = require('./Routes/home')
const accountRoute = require('./Routes/account')

const dbURL = "mongodb+srv://dominic:kelas6b@cluster0-eja7z.mongodb.net/nsp?retryWrites=true&w=majority"

app.set("view engine", "pug");
app.set("views", "View");

app.use(express.static(path.join(__dirname, "View")))
app.use(bp.urlencoded({ extended: false }));

app.use("/user", accountRoute)
app.use("/", homeRoute)

mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(result => {
        app.listen(9000, () => {
            console.log("Connected")
        })
    })