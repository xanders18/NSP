const express=require("express")

const router=express.Router();

const accountControl=require('../Controller/account')


router.post("/signup",accountControl.post_signup)
router.post("/login",accountControl.post_login)


module.exports=router


