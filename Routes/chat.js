const express = require('express')
const router = express.Router()
const chatControl = require('../Controller/chat')

router.get("/messaging",chatControl.chat_page)

module.exports=router