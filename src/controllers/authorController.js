const newAuthor= require("../models/newAuthor")

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await newAuthor.create(author)
    res.send({data: authorCreated})
}

module.exports.createAuthor= createAuthor