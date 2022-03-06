const { count } = require("console")


const firstApi = async function (req, res){
   

    res.send({msg: " firstTest is working fine"})

}

const secondApi = async function (req, res){

    res.send({msg: " secondTest is working fine"})

}
const thirdApi = async function (req, res){

    res.send({msg: " thirdTest is working fine"})

}
const fourthApi = async function (req, res){

    res.send({msg: " fourthTest is working fine"})

}

module.exports.firstApi = firstApi
module.exports.secondApi = secondApi
module.exports.thirdApi = thirdApi
module.exports.fourthApi = fourthApi