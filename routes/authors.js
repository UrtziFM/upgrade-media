const express = require('express');

const authorController = require('../controllers/authors');

const router = express.Router();

router.get('/', authorController.getAll);
router.get('/:id', authorController.getById);
router.post('/create', authorController.create);

module.exports = router;
