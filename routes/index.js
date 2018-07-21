const db = require('../lib/db');
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SSTS' });
});

router.get('/about-us', function(req, res, next) {
  res.render('about-us', { title: 'SSTS' });
});

module.exports = router;
