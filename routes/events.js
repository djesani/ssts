const express = require('express');

const asyncMiddleware = require('../app/utils/asyncMiddleware');
const { eventImages } = require('../app/controllers');


const router = express.Router();

router.get('/', function(req, res, next) {
    asyncMiddleware(eventImages;
});

module.exports = router;
