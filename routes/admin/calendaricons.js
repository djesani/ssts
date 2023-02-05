const fs = require('fs');
const formidable = require('formidable');
const express = require('express');
const router = express.Router();

const { calendarIconsFilePath } = require('../../config');
const { imageRootDir } = require('../../config');

const calendarIconsImagePath = `${imageRootDir}/calendaricons`;

router.get('/', function(req, res, next) {
    const allCalendarIcons = [];

    fs.readdir(calendarIconsFilePath, function(err, files) {
      console.log(files);
      if(err) console.log(err);
      files.forEach(file => {
        const calendarIconsJson = JSON.parse(fs.readFileSync(`${calendarIconsFilePath}/${file}`, 'utf8'));
        calendarIconsJson.filename = file;
        allCalendarIcons.push(calendarIconsJson);
      });
      console.log("Got all calendar icons:");
      console.log(allCalendarIcons);
      res.send(allCalendarIcons);
    });
});

router.post('/', function(req, res, next) {
    const filename = req.body.name.replace(/[^A-Za-z0-9]/g,'');

    fs.writeFile(`${calendarIconsFilePath}/${filename}`, JSON.stringify(req.body, null, 2), function (err) {
        if (err) throw err;
        console.log(`Created new calendar icon: ${filename}`);
        res.send("Created a new calendar icon with filename: " + filename);
    });
});

router.patch('/:filename', function(req, res, next) {
    const { filename } = req.params;;

    const calendarIconsJson = JSON.parse(fs.readFileSync(`${calendarIconsFilePath}/${filename}`, 'utf8'));
    const mergeData = { 
        ...calendarIconsJson,
        ...req.body,
    };

    fs.writeFile(`${calendarIconsFilePath}/${filename}`, JSON.stringify(mergeData, null, 2), function (err) {
        if (err) throw err;
        console.log(`Replaced calendar icon: ${filename}`);
        res.send("Updated calendar icon with filename: " + filename);
    });
});

router.post('/fileupload', function (req, res){
    let form = new formidable.IncomingForm();
    form.parse(req);

    form.on('fileBegin', function (name, file){
        file.path = calendarIconsImagePath + "/" + file.name;
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
