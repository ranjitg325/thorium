const express = require('express');
const router = express.Router();
const allController = require('../controllers/allController')

router.get('/test-me', function (req, res) {
    res.send('Welcome to my api')
});


router.post('/createNewAuthor', allController.createNewAuthor)
router.post('/createNewBook', allController.createNewBook)
router.get('/allBooks', allController.allBooks)
router.get('/authorsName', allController.authorsName)
router.get('/updatedBookPrice', allController.upadatedBookPrice)


module.exports = router;
