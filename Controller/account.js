const userModel=require("../Models/account")

exports.post_signup=async (req,res,next)=>{    
    const newUser=new userModel({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
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
    console.log(user)

}
