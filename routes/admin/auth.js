const env = process.env;

const db = require('../../lib/db');
const { basicAuth } = require('../../utils/strategies');
const express = require('express');
const router = express.Router();

router.post('/',
    basicAuth.authenticate('basic', { session: false }), function(req, res, next) {
    console.log(req.user);
    res.send('OK');
});

module.exports = router;
