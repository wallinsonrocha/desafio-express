const express = require('express');
const router = express.Router();
const bookController = require('./../controllers/bookController');

//  Get routers
router.get('/', bookController.getBook);
router.get('/:id', bookController.getBookById);

router.post('/', bookController.createBooks);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;