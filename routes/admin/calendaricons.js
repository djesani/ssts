const fs = require('fs');
const path = require('path');
const express = require('express');
const { calendarIconsFilePath } = require('../../config');
const router = express.Router();

const externalImagePath = "/images/calendaricons/";
const externalImagePathRegex = "^\/images\/calendaricons\/";

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
    const allCalendarIcons = [];

    fs.readdir(calendarIconsFilePath, function(err, files) {
      console.log(files);
      if(err) console.log(err);
      files.forEach(file => {
        const calendarIconJson = JSON.parse(fs.readFileSync(`${calendarIconsFilePath}/${file}`, 'utf8'));
        calendarIconJson.filename = file;
        calendarIconJson.startDate = getDateFromTimestamp(calendarIconJson.startDate);
        calendarIconJson.endDate = getDateFromTimestamp(calendarIconJson.endDate);
        allCalendarIcons.push(calendarIconJson);
      });
      console.log("Got all calendar icons:");
      console.log(allCalendarIcons);
      res.send(allCalendarIcons);
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

    fs.writeFile(`${calendarIconsFilePath}/${filename}`, JSON.stringify(mergeData, null, 2), function (err) {
        if (err) throw err;
        console.log(`Created new calendarIcon: ${filename}`);
        res.send("Created a new calendarIcon with filename: " + filename);
    });
});

router.patch('/:filename', function(req, res, next) {
    const { filename } = req.params;
    const { startDate: payloadStart, endDate: payloadEnd } = req.body;

    const calendarIconJson = JSON.parse(fs.readFileSync(`${calendarIconsFilePath}/${filename}`, 'utf8'));
    const startDate = getTimestampFromDate(payloadStart, true);
    const endDate = getTimestampFromDate(payloadEnd);
    const mergeData = { 
        ...calendarIconJson,
        ...req.body,
        startDate,
        endDate
    };

    fs.writeFile(`${calendarIconsFilePath}/${filename}`, JSON.stringify(mergeData, null, 2), function (err) {
        if (err) throw err;
        console.log(`Replaced calendarIcon: ${filename}`);
        res.send("Updated calendarIcon with filename: " + filename);
    });
});

router.delete('/:filename', function(req, res, next) {
    const { filename } = req.params;
    const unpublishedData = {
        unpublished: true,
        unpublishedDate: new Date().getTime()
    }

    const calendarIconJson = JSON.parse(fs.readFileSync(`${calendarIconsFilePath}/${filename}`, 'utf8'));
    const mergeData = Object.assign(calendarIconJson, unpublishedData);

    fs.writeFile(`${calendarIconsFilePath}/${filename}`, JSON.stringify(mergeData, null, 2), function (err) {
        if (err) throw err;
        console.log(`Unpublished calendarIcon: ${filename}`);
        res.send("Unpublished a calendarIcon with filename: " + filename);
    });
});

module.exports = router;