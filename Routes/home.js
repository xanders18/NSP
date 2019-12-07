const express = require('express')
const router = express.Router()
const homeControl = require('../Controller/home')


//----------------------------------------------------------------
router.get("/net_resolver", homeControl.assignment_13)
router.post("/net_resolver", homeControl.post_ass13)


//----------------------------------------------------------------
router.get("/portwaiting", homeControl.assignment_14)
router.post("/portwaiting", homeControl.post_ass14)

router.get("/portbinding", homeControl.assignment_15)
router.post("/portbinding", homeControl.post_ass15)

//----------------------------------------------------------------
router.get("/organizer", homeControl.manage)
router.post("/organizer", homeControl.post_manage)

//----------------------------------------------------------------
router.post("/sendnet",homeControl.send_email)

router.get("/",homeControl.mainPage)

module.exports = router
