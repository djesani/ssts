const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SSTS' });
});

router.get('/about-us', function(req, res, next) {
  res.render('about-us', { title: 'SSTS' });
});

router.get('/about-lordSwaminarayan', function(req, res, next) {
  res.render('about-lordSwaminarayan', { title: 'SSTS' });
});

router.get('/mandir-history', function(req, res, next) {
  res.render('mandir-history', { title: 'SSTS' });
});

router.get('/acharyas', function(req, res, next) {
  res.render('acharyas', { title: 'SSTS' });
});

router.get('/history', function(req, res, next) {
  res.render('history', { title: 'SSTS' });
});

router.get('/donations', function(req, res, next) {
  res.render('donations', { title: 'SSTS' });
});

router.get('/useful-links', function(req, res, next) {
  res.render('useful-links', { title: 'SSTS' });
});

module.exports = router;
