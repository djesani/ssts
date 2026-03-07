const events = require('./events');
const express = require('express');
const router = express.Router();

router.use('/', events);

router.get('/about-lordSwaminarayan', function (req, res, next) {
  res.render('about-lordSwaminarayan', { title: 'About Lord Swaminarayan' });
});

router.get('/murtis', function (req, res, next) {
  res.render('murtis', { title: 'Murtis' });
});

router.get('/about-us', function (req, res, next) {
  res.render('about-us', { title: 'About the Temple' });
});

router.get('/mandir-history', function (req, res, next) {
  res.render('mandir-history', { title: 'Mandir History' });
});

router.get('/acharyas', function (req, res, next) {
  res.render('acharyas', { title: 'Acharyas' });
});

router.get('/history', function (req, res, next) {
  res.render('history', { title: 'History' });
});

router.get('/donations', function (req, res, next) {
  res.render('donations', { title: 'Donations' });
});

router.get('/useful-links', function (req, res, next) {
  res.render('useful-links', { title: 'Useful Links' });
});

router.get('/contact-us', function (req, res, next) {
  res.render('contact-us', { title: 'Contact Us' });
});

router.get('/calendar', function (req, res, next) {
  res.render('calendar', { title: 'Calendar' });
});

router.get('/test-upload', function (req, res, next) {
  res.render('admin/test-upload', { title: 'test-upload' });
});

router.get('/admin/api-docs', function (req, res, next) {
  res.render('admin/api-docs', { title: 'api-docs' });
});

router.get('/trivia', function (req, res, next) {
  res.render('trivia', { title: 'Trivia' });
});

router.get('/yuvak-mandal', function (req, res, next) {
  res.render('yuvak-mandal', { title: 'Yuvak Mandal' });
});

router.get('/bal-mandal', function (req, res, next) {
  res.render('bal-mandal', { title: 'Bal Mandal' });
});

router.get('/pipe-band', function (req, res, next) {
  res.render('pipe-band', { title: 'Pipe Band' });
});

router.get('/timeline', function (req, res, next) {
  res.render('timeline', { title: 'Timeline' });
});

router.get('/leelas', function (req, res, next) {
  res.render('leelas', { title: 'Leelas' });
});

module.exports = router;
