//let obj = require('./logger.js')
// let obj1 = require('../loggerfolder/logger.js')
// let obj2= require('../util/helper.js')
// let obj3 = require('../validator/formatter.js')

const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
   // obj.log('thorium')
//    obj1.welcome('welcome')
//    obj2.helper('helper')
//    obj3.trim('trim')
//  obj3.convert('convert')
 
    res.send('Welcome to my api')
});
// 1. this api fetch all array of movies

router.get('/movies',function(req,res){
    res.send('["dabbang","fukrey","rocky","upkar","om"]')
});

//2. this api fetch all array of movies by index no.

router.get('/movies/:movieId', function(req,res){
    mov=["dabbang","fukrey","rocky","upkar","om"]
    let value= req.params.movieId;
    if(value>mov.length-1){
        res.send('"does not exist"')
    }
    else{
        res.send(mov[value])
    }
});

//3. this api will getch all movies from array by indeaxid
router.get('/moviez',function(req,res){
    res.send([{id: 1, name: 'the shine'},{id :2,name:'incredible'},{id:3,name:'3 ideots'},{id:4,name:'radhe'},{id:5, name:'the gandhi'}])

});

//4. this API will fetch all movies from array of objects by indexId
router.get('/films/:filmId',function(req,res){
    let movi= [{id: 1, name: 'the shine'},{id :2,name:'incredible'},{id:3,name:'3 ideots'},{id:4,name:'radhe'},{id:5, name:'the gandhi'}]
    let value= req.params.filmId;
    let found=false;
    for(i=0;i<movi.length;i++){
        if(movi[i].id==value){
            found=true
            res.send(movi[i])
            break
        } 
    }
     if(found==false){

     res.send('no movie exist with this id')}
});
module.exports = router;
