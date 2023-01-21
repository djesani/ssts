const events = require('./events');
const calendaricons = require('./calendaricons');
const users = require('./users');
const auth = require('./auth');
const path = require('path');
const formidable = require('formidable');
const express = require('express');
const { imageRootDir } = require('../../config');
const router = express.Router();

const eventsImagePath = `${imageRootDir}/events`;

router.use('/events', events);
router.use('/calendaricons', calendaricons);
router.use('/users', users);
router.use('/auth', auth);

router.post('/fileupload', function (req, res){
    var form = new formidable.IncomingForm();
    form.parse(req);

    form.on('fileBegin', function (name, file){
        file.path = eventsImagePath + "/" + file.name;
    });

    form.on('file', function (name, file){
        console.log('Uploaded file: ' + file.name);
    });

    form.on('error', function (name, file){
        console.error('Error', err)
        res.status(500).send('Error uploading file!');
    });

    form.on('end', function (name, file){
        res.status(200).send('File uploaded!');
    });
});

module.exports = router;
