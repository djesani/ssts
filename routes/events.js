const express = require('express');
const router = express.Router();
const { getEvents } = require('../app/controllers/events');

router.get('/', getEvents);

module.exports = router;
