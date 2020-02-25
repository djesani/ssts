const express = require('express');
const fs = require('fs');
const path = require('path');
const { mediaRootDir } = require('../config');
const { getddFolder } = require('../app/controllers');
const { getddImage } = require('../app/controllers');
const asyncMiddleware = require('../app/utils/asyncMiddleware');

const router = express.Router();

router.get('/', function(req, res, next) {
  asyncMiddleware(getddFolder)
});

router.get('/image', function(req, res, next) {
  asyncMiddleware(getddImage)
});

module.exports = router;
