const env = process.env;

const db = require('../../lib/db');
const { basicAuth, localAuth } = require('../../utils/strategies');
const express = require('express');
const router = express.Router();

router.post('/basic',
    basicAuth.authenticate('basic'), function(req, res, next) {
    console.log(req.user);
    res.send('OK');
});

router.post('/local',
    localAuth.authenticate('local'), function(req, res, next) {
    console.log(req.user);
    res.send('OK');
});

router.get('/user', function(req, res){
    console.log(req.user);
    res.send(req.user);
});

router.get('/logout', function(req, res){
  req.logout();
  res.send(null)
});

module.exports = router;
