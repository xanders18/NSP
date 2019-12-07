const path = require("path")
const jarfile = require('jarfile')
const nodemailer=require('nodemailer')
const sendgrid=require('nodemailer-sendgrid-transport')

const netHTML=require('./HTML-JS/net')

let ipAddress,hostName,userIP


const transporter=nodemailer.createTransport(sendgrid({
    auth:{
        api_key: "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"
    }
}))

exports.mainPage=(req,res,next)=>{
    res.render("./PUG/home")
}

exports.assignment_13 = (req, res, next) => {    
    console.log(ipAddress)
    res.render("./PUG/ass13",{
        hostIP:ipAddress,
        hostName:hostName,
        userIP:userIP
    });
    ipAddress=hostName=userIP=""
}

exports.post_ass13 = async (req, res, next) => {
    var exec = require('child_process').exec, child;
    child = await exec(`java -jar D:\\Kuliah\\Semester-7\\Project7\\NSP\\Source\\ass13.jar ${req.body.domain}`,
        (error, data) => {
            console.log('stdout: ' + data);
            const result = data.split(("\r", "\n"))
            result.map(data=>{
                console.log(data);
            })
            ipAddress=result[0]
            hostName=result[1]
            userIP=result[2]

            if (error !== null) {
                console.log('exec error: ' + error);
            }
            return res.redirect("/net_resolver")
        });     
    
}


exports.assignment_14 = (req, res, next) => {
    console.log(req.test)
    res.render("./PUG/ass14")
}

exports.post_ass14 = async (req, res, next) => {
    var exec = require('child_process').exec, child;
    child = await exec(`java -jar D:\\Kuliah\\Semester-7\\Project7\\NSP\\Source\\ass14.jar`,
        (error, data) => {
            if (error !== null) {
                console.log('exec error: ' + error);
            }
        });
}

exports.assignment_15 = (req, res, next) => {
    res.render("./PUG/ass15")
}

exports.post_ass15 = async (req, res, next) => {
    var exec = require('child_process').exec, child;
    child = await exec(`java -jar D:\\Kuliah\\Semester-7\\Project7\\NSP\\Source\\ass15.jar ${req.body.domain} ${req.body.msg}`,
        (error, data) => {
            console.log('stdout: ' + data);
            const result = data.split(("\r", "\n"))
            console.log(result);

            if (error !== null) {
                console.log('exec error: ' + error);
            }
        });
}

exports.manage = (req, res, next) => {
    res.render("./PUG/file")
}

exports.post_manage = async (req, res, next) => {
    let options=req.body.dest;
    let files
    let strOut = ""
    let done=false

    if (req.body.choose == "Create File") {
        files="create-file.jar"
        options = req.body.msg.split("")
        options.map(data => {
            data = data == " " ? "-" : data
            data = data == "\n" ? "%" : data
            strOut += data
        })
        options = strOut
    }
    else if (req.body.choose == "Copy File"){
        files="copy-file.jar"
    }
    else if (req.body.choose == "Copy Data"){
        files="copy-data.jar"
    }
    else if (req.body.choose == "Read File"){
        files="read-file.jar"
    }
    else if (req.body.choose == "Create Folder"){
        files="create-dir.jar"
    }
    else if (req.body.choose == "Delete Folder"){
        files="delete-dir.jar"
    }
    
    
    var exec_after = require('child_process').exec, child2;
    var exec = require('child_process').exec, child;
    
    child = await exec(`java -jar D:\\Kuliah\\Semester-7\\Project7\\NSP\\Source\\${files} ${req.body.dir} ${options}`,
        (error, data) => {
            console.log('stdout: ' + data);
            const result = data.split(("\r", "\n"))
            console.log(result);
            child2 = exec_after(`start ${req.body.dir}`);
            if (error !== null) {
                console.log('exec error: ' + error);
            }
        });
}

exports.send_email=async (req,res,next)=>{
    console.log(req.body.email)
    transporter.sendMail({
        to:req.body.email,
        from:"Joker",
        subject:"Network Resolver",
        html:netHTML(req.body.hostip,req.body.hostname,req.body.userip)
    })
    return res.redirect("/net_resolver")
}