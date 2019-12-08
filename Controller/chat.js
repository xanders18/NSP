const io = require("socket.io")
const socket=require('../test')
const userModel=require('../Models/account')

exports.chat_page =async (req, res, next) => {
    if(!req.logedIn){        
        return res.redirect("/#account")
    }
    const user=await userModel.findOne({email:req.user_email})   
    
    socket.get(user.username)
    res.render("./PUG/chat")
    //console.log(socket.get())
}
