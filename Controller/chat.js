const io = require("socket.io")
const socket=require('../test')

exports.chat_page = (req, res, next) => {
    if(!req.logedIn){        
        return res.redirect("/#account")
    }
    socket.get("rambo")
    res.render("./PUG/chat")
    //console.log(socket.get())
}
