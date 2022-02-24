const express = require('express');
const router = express.Router();
//Q.1)saves a player’s details and doesn’t allow saving the data of a player with a name that already exists in the data) 23feb
// let players=[];
// router.post('/players', function(req, res) {
//     let player = req.body;
//     let playerName = players.name;
//     for(let i = 0;i < players.length; i++){
//         if(players[i].name == playerName){
//              res.send ("player already exists");
//         }
//     }
//     players.push(player);
//     console.log("Player array",players);
//     res.send(players);
    
// });

//Q.2)Write an api that books a slot for a player with relevant details. The api looks like POST
router.post('/players/:playerName/bookings/:bookingId', function(req, res) {
   let name = req.params.playerName
   let isPlayerPresent = false

   for (let i = 0; i < players.length; i++) {
       if (players[i].name == name) {
           isPlayerPresent = true
       }
   }
   if (!isPlayerPresent) {
       return res.send('Player not present')
   }

   let booking = req.body
   let bookingId = req.params.bookingId
   for (let i = 0; i < players.length; i++) {
       if (players[i].name == name) {
           for (let j = 0; j < players[i].bookings.length; j++) {
               if (players[i].bookings[j].bookingNumber == bookingId) {
                   return res.send('Booking with this id is already present')
               }
           }
           players[i].bookings.push(booking)
       }
   }
   res.send(players)
}),

router.get('/test-me', function (req, res) {
  res.send('Welcome to my api')
});
module.exports = router;