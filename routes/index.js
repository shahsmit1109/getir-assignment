var express = require('express');
var countController = require('../controller/count');
var router = express.Router();

router.post('/count/search', countController.search);

module.exports = router