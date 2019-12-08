const userModel = require("../Models/account")
const bcrypt = require('bcryptjs')


exports.post_signup = async (req, res, next) => {
    const hashPassword = await bcrypt.hash(req.body.password, 12)
    const user=await userModel.findOne({email:req.body.email})
    if(user){
        req.flash("signup","Email already registered!")
        return res.redirect("/#account")
    }
    if(req.body.password!==req.body.checkpass){
        req.flash("signup","Password doesn't Match!!")
        return res.redirect("/#account")
    }    
    const newUser = new userModel({
        username: req.body.username,
        email: req.body.email,
        password: hashPassword
    })
    await newUser.save()
    return res.redirect("/")
}


exports.post_login = async (req, res, next) => {
    const user = await userModel.findOne({ email: req.body.email })           
    if (!user) {
        req.flash("err", "Email Not Found!!")
        return res.redirect('/#account')
    }
    const passCheck = await bcrypt.compare(req.body.password, user.password)
    if (!passCheck) {
        req.flash("err", "Invalid Password!!")
        return res.redirect('/#account')
    }
    req.session.email=user.email
    req.session.login = 1
    return res.redirect('/')

}

exports.post_logout=async (req,res,next)=>{
    req.session.destroy(()=>{
        return res.redirect("/");
    });    
}
