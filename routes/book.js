const express = require('express');

const bookControllers = require('../controllers/books');

const router = express.Router();

// http://localhost:300X/books
router.get('/', bookControllers.getAll);
// http://localhost:300X/books/1234
router.get('/:id', bookControllers.getById);
// http://localhost:300X/books/create
router.post('/create', bookControllers.createBook);

module.exports = router;
