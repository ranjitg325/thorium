//let obj = require('./logger.js')
let obj1 = require('../loggerfolder/logger.js')
let obj2= require('../util/helper.js')
let obj3 = require('../validator/formatter.js')

const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
   // obj.log('thorium')
   obj1.welcome('welcome')
   obj2.helper('helper')
   obj3.trim('trim')
 obj3.convert('convert')
 
    res.send('Welcome to my api')
});
module.exports = router;