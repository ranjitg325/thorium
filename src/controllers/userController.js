const userSchema=require("../models/userSchema.js")

const createBook= async function (req, res){
    var data = req.body
    let savedData= await userSchema.create(data)
    res.send ({msg:savedData})
}


const bookList= async function(res,req){
    let allUsers= await userSchema.find()
    res.send({msg: allUsers})
}

module.exports.createBook= createBook
module.exports.bookList=bookList