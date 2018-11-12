const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', (req, res) => controller.getMovies);
router.get('/:id', (req, res) => controller.getMovies);


module.exports = router ;


