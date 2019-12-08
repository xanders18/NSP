const userModel=require("../Models/account")
const bcrypt=require('bcryptjs')


exports.post_signup=async (req,res,next)=>{    
    const hashPassword=await bcrypt.hash(req.body.password,12)
    const newUser=new userModel({
        username:req.body.username,
        email:req.body.email,
        password:hashPassword
    })
    await newUser.save()
    return res.redirect("/")
}


exports.post_login=async (req,res,next)=>{
    const user=await userModel.findOne({email:req.body.email})
    if(!user){

    }
    if(user.password!==req.body.password){

    }
    req.flash("err")="just test"

    return res.redirect('/')

}
