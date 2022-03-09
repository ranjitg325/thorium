const jwt=require("jsonwebtoken")
const auth = function(req,res,next){
    let id = req.params.userId
    let token = req.headers["x-auth-token"];

     if (!token) return res.send({ status: false, msg: "token must be present" });
     let validToken = jwt.verify(token,"functionup-thorium")
     if(validToken.userId != id ){
         res.send({ msg: "unauthorise access"})
     }
     
     console.log(validToken);
     next()
    }
    
    module.exports.auth=auth