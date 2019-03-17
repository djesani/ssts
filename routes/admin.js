const env = process.env;

const db = require('../lib/db');
const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();

const eventFilePath = path.join(__dirname, '../public/events/');

const now = new Date();
const todayDate = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();

//get data from Form
//crud - create, replace, update, delete

router.get('/', function(req, res, next) {

});

module.exports = router;
