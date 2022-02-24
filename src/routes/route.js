

const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
 
    res.send('Welcome to my api')
});

router.post('/playerss',function(req,res){
   let newplayer=req.body.newplayer
   for(i=0;i<player.length;i++){
      if(player[i].name==newplayer.name){
         res.send({"msg":"player already exist"})

      }
      else{
         player.push(newplayer)
         res.send({"msg":player})
      }
   }
})
module.exports = router;
