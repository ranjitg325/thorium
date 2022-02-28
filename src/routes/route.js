const express = require('express');
const router = express.Router();
const userSchema= require("../models/userSchema.js")

const UserController= require("../controllers/userController.js")

router.get('/test-me', function (req, res) {
    res.send('Welcome to my api')
});

router.post('/createBook', UserController.createBook)
// router.post('/createBook', async function(req,res){
//   let value = req.body
//   let savedValue= await userSchema.create(value)
//   res.send({msg:savedValue})
// })
router.get('/bookList', UserController.bookList);

module.exports = router;