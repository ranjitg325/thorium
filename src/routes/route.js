//let obj = require('./logger.js')
let obj1 = require('../loggerfolder/logger.js')
let obj2 = require ('../util/helper.js')
let obj3 = require ('../validator/formatter.js')
const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    obj1.welcome('welcome')
    obj2.helper('helper')
    obj3.trim('trim')
    obj3.convert('convert')
    res.send('My first ever api!')
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

router.get('/')
//find the missing no.

app.get('/sol1', function (req, res) {
    function getMissingNo(a,n)
{  
    let n_elements_sum =Math.floor (n * (n + 1) / 2 );
    let sum = 0;
 
  for(let i = 0; i < n - 1; i++)
    sum += a[i];
  return n_elements_sum-sum;
}
 
// Driver Code
    let a = [1, 2, 4, 5, 6];
    let n=a.length+1;
    let miss=getMissingNo(a,n)
    document.write(miss);
});

module.exports = router;