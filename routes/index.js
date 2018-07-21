const db = require('../lib/db');
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SSTS' });
});

module.exports = router;
