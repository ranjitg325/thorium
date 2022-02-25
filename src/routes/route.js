const express = require('express');
const router = express.Router();

let persons= [
   {
   name: "PK",
   age: 10,
   votingStatus: false
  },
  {
   name: "SK",
   age: 20,
   votingStatus: false
  },
  {
   name: "AA",
   age: 70,
   votingStatus: false
  },
  {
   name: "SC",
   age: 5,
   votingStatus: false
  },
  {
   name: "HO",
   age: 40,
   votingStatus: false
  }
  ]

  let eligible=[]

 router.get("/query2",function(req,res){
   let person = req.query.votingage
  
   for (let i=0;i<persons.length;i++){
     if(persons[i].age>=person){
        persons[i].votingStatus=true
        eligible.push(persons[i])

     }
   }
   res.send({result:eligible,status:true})
   console.log(eligible)
 })  

router.get('/test-me', function (req, res) {
    res.send('Welcome to my api')
});
module.exports = router;