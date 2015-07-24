'use strict';

var express = require('express');
var controller = require('./inspiration.controller');

var router = express.Router();

router.get('/', controller.show);

module.exports = router;
