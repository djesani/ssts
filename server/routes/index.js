const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SSTS' });
});

router.get('/about-us', function(req, res, next) {
  res.render('about-us', { title: 'About Us' });
});

router.get('/about-lordSwaminarayan', function(req, res, next) {
  res.render('about-lordSwaminarayan', { title: 'About Lord Swaminarayan' });
});

router.get('/mandir-history', function(req, res, next) {
  res.render('mandir-history', { title: 'Mandir History' });
});

router.get('/acharyas', function(req, res, next) {
  res.render('acharyas', { title: 'Acharyas' });
});

router.get('/history', function(req, res, next) {
  res.render('history', { title: 'History' });
});

router.get('/donations', function(req, res, next) {
  res.render('donations', { title: 'Donations' });
});

router.get('/useful-links', function(req, res, next) {
  res.render('useful-links', { title: 'Useful Links' });
});

module.exports = router;
