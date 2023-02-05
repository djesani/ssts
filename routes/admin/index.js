const events = require('./events');
const calendaricons = require('./calendaricons');
const subscribers = require('./subscribers');
const auth = require('./auth');
const express = require('express');
const router = express.Router();

router.use('/events', events);
router.use('/calendaricons', calendaricons);
router.use('/subscribers', subscribers);
router.use('/auth', auth);

module.exports = router;