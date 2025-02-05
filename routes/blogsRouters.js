const express = require('express')
const router = express.Router();
const blogsController = require('../controller/blogsController')


//index
router.get('/', blogsController.index)

//show
router.get('/:id', blogsController.show)

module.exports = router;