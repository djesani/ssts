const fs = require('fs');
const path = require('path');
const express = require('express');
const { eventFilePath } = require('../../config');
const router = express.Router();

const externalImagePath = "/images/events/";
const externalImagePathRegex = "^\/images\/events\/";

const getDateFromTimestamp = timestamp => {
    const date = new Date(timestamp);
    const dateString = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    return dateString;
}

const getTimestampFromDate = (date, isStart) => {
    const [ day, month, year ] = date.split('/');
    const dateString = `${year}-${month}-${day}`;
    const dateTime = isStart ? `${dateString} 00:00:00` : `${dateString} 23:59:00`;
    const timestamp = new Date(dateTime).getTime();
    return timestamp;
}

router.get('/', function(req, res, next) {
    const allEvents = [];

    fs.readdir(eventFilePath, function(err, files) {
      console.log(files);
      if(err) console.log(err);
      files.forEach(file => {
        const eventJson = JSON.parse(fs.readFileSync(`${eventFilePath}/${file}`, 'utf8'));
        eventJson.filename = file;
        eventJson.startDate = getDateFromTimestamp(eventJson.startDate);
        eventJson.endDate = getDateFromTimestamp(eventJson.endDate);
        allEvents.push(eventJson);
      });
      console.log("Got all events:");
      console.log(allEvents);
      res.send(allEvents);
    });
});

router.post('/', function(req, res, next) {
    const filename = req.body.name.replace(/[^A-Za-z0-9]/g,'');
    const { startDate: payloadStart, endDate: payloadEnd } = req.body;
    const startDate = getTimestampFromDate(payloadStart, true);
    const endDate = getTimestampFromDate(payloadEnd);

    // check image has right filepath
    if(!req.body.imageurl.match(externalImagePathRegex)){
        console.log("image missing file path. Adding");
        req.body.imageurl = externalImagePath + req.body.imageurl;
    }

    const mergeData = {
        ...req.body,
        startDate,
        endDate
    };

    fs.writeFile(`${eventFilePath}/${filename}`, JSON.stringify(mergeData, null, 2), function (err) {
        if (err) throw err;
        console.log(`Created new event: ${filename}`);
        res.send("Created a new event with filename: " + filename);
    });
});

router.patch('/:filename', function(req, res, next) {
    const { filename } = req.params;
    const { startDate: payloadStart, endDate: payloadEnd } = req.body;

    const eventJson = JSON.parse(fs.readFileSync(`${eventFilePath}/${filename}`, 'utf8'));
    const startDate = getTimestampFromDate(payloadStart, true);
    const endDate = getTimestampFromDate(payloadEnd);
    const mergeData = { 
        ...eventJson,
        ...req.body,
        startDate,
        endDate
    };

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