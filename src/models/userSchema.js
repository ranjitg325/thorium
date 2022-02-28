const mongoose=require('mongoose')
//const { stringify } = require('nodemon/lib/utils')

const userSchema=new mongoose.Schema({
    bookName : String,
    authorName : String,
    category: {type :String, enum: ['arts','commerce','science']},
    year : String,
    
}, {timestamps: true})

module.exports=  mongoose.model('user',userSchema)