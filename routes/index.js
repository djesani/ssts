const events = require('./events');
const express = require('express');
const router = express.Router();

router.use('/', events);

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

router.get('/contact-us', function(req, res, next) {
  res.render('contact-us', { title: 'Contact Us' });
});

router.get('/test-upload', function(req, res, next) {
  res.render('admin/test-upload', { title: 'test-upload' });
});

router.get('/admin/api-docs', function(req, res, next) {
  res.render('admin/api-docs', { title: 'api-docs' });
});


router.get('/admin3/', function(req, res, next) {
  res.render('admin3', { title: 'index' });
});




module.exports = router;
