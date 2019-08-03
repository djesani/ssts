const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const ddFilePath = path.join(__dirname, '../public/media/daily-darshan/');

const toDate = (dateStr) => {
  const [day, month, year] = dateStr.split("-");
  return new Date(year, month - 1, day);
}

const compareByDate = function (a,b) {
  if (toDate(a) < toDate(b))
    return -1;
  if (toDate(a) > toDate(b))
    return 1;
  return 0;
}

router.get('/', function(req, res, next) {
    fs.readdir(ddFilePath, function(err, files) {
        const latestDDFolder = files.sort(compareByDate).pop();
        console.log(files);
        console.log(latestDDFolder);

        if(err) console.log(err);
        res.redirect(302, `/media/daily-darshan/${latestDDFolder}`);
    });
});

router.get('/image', function(req, res, next) {
    fs.readdir(ddFilePath, function(err, files) {
        const latestDDFolder = files.sort(compareByDate).pop();
        console.log(files);
        console.log(latestDDFolder);

        if(err) console.log(err);

        fs.readdir(`${ddFilePath}/${latestDDFolder}`, function(err, files) {
            const dDImg = files.pop();
            const ddPath = `/media/daily-darshan/${latestDDFolder}/${dDImg}`;
            console.log(files);
            console.log(ddPath);

            if(err) console.log(err);
            res.redirect(302, ddPath);
        });
    });
});

module.exports = router;
