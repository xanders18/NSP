const express = require('express')
const router = express.Router()
const chatControl = require('../Controller/chat')

router.get("/chat",chatControl.chat_page)
