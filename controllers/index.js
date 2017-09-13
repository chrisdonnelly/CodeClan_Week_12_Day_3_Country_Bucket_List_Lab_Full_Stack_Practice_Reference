var express = require('express');
var router = express.Router();
var path = require('path');

router.use('/api/bucketlist', require('./countries_controller.js'));

module.exports = router;