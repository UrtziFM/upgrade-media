const express = require('express');

const songController = require('../controllers/songs');

const router = express.Router();

router.get('/', songController.getAll);
router.get('/:id', songController.getById);
router.post('/create', songController.create);
router.put('/:id', songController.update);
router.delete('/:id', songController.remove);

module.exports = router;
