const express = require('express')
const router = express.Router();
const blogsController = require('../controller/blogsController')


//index
router.get('/', blogsController.index);

//show
router.get('/:id', blogsController.show);
// store
router.post('/', blogsController.store);

// update
router.put('/:id', blogsController.update);

// modify
router.patch('/:id', blogsController.modify);

// destroy
router.delete('/:id', blogsController.destroy);

module.exports = router;