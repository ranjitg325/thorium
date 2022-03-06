
const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const Controller = require ('../controller/userController')

// router.get("/test-me", function (req, res) {
    // res.send("My first ever api!")
// })


router.get("/api1", Controller.firstApi)
router.get("/api2", Controller.secondApi)
router.get("/api3", Controller.thirdApi)
router.get("/api4", Controller.fourthApi)

module.exports = router;