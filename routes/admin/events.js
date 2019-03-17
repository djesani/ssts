const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();

const eventFilePath = path.join(__dirname, '../../public/events');
const externalImagePath = "/images/events/";
const externalImagePathRegex = "^\/images\/events\/";

router.get('/', function(req, res, next) {
    const allEvents = [];

    fs.readdir(eventFilePath, function(err, files) {
      console.log(files);
      if(err) console.log(err);
      files.forEach(file => {
        const eventJson = JSON.parse(fs.readFileSync(`${eventFilePath}/${file}`, 'utf8'));
        eventJson.filename = file;
        allEvents.push(eventJson);
      });
      console.log("Got all events:");
      console.log(allEvents);
      res.send(allEvents);
    });
});

router.post('/', function(req, res, next) {
    const filename = req.body.name.replace(/[^A-Za-z0-9]/g,'');

    // check image has right filepath
    if(!req.body.imageurl.match(externalImagePathRegex)){
        console.log("image missing file path. Adding");
        req.body.imageurl = externalImagePath + req.body.imageurl;
    }

    fs.writeFile(`${eventFilePath}/${filename}`, JSON.stringify(req.body, null, 2), function (err) {
        if (err) throw err;
        console.log(`Created new event: ${filename}`);
        res.send("Created a new event with filename: " + filename);
    });
});

router.patch('/:filename', function(req, res, next) {
    const { filename } = req.params;

    const eventJson = JSON.parse(fs.readFileSync(`${eventFilePath}/${filename}`, 'utf8'));
    const mergeData = Object.assign(eventJson, req.body);

    fs.writeFile(`${eventFilePath}/${filename}`, JSON.stringify(mergeData, null, 2), function (err) {
        if (err) throw err;
        console.log(`Replaced event: ${filename}`);
        res.send("Updated event with filename: " + filename);
    });
});

router.delete('/:filename', function(req, res, next) {
    const { filename } = req.params;
    const unpublishedData = {
        unpublished: true,
        unpublishedDate: new Date().getTime()
    }

    const eventJson = JSON.parse(fs.readFileSync(`${eventFilePath}/${filename}`, 'utf8'));
    const mergeData = Object.assign(eventJson, unpublishedData);

    fs.writeFile(`${eventFilePath}/${filename}`, JSON.stringify(mergeData, null, 2), function (err) {
        if (err) throw err;
        console.log(`Unpublished event: ${filename}`);
        res.send("Unpublished an event with filename: " + filename);
    });
});

module.exports = router;
