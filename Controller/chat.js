const io = require("socket.io")

exports.chat_page = (req, res, next) => {
    res.render("./PUG/chat")  
    console.log(req.val)  
    //console.log(socket.get())
}
