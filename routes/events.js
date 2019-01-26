const env = process.env;

const db = require('../lib/db');
const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();

const eventFilePath = path.join(__dirname, '../public/events/');

router.get('/', function(req, res, next) {
  if(env.DB_ENABLED){
    db.query('SELECT * FROM event where enabled = 1', (err,rows) => {
      if(err) throw err;
      const events = JSON.stringify(rows);
      console.log('Got events:');
      console.log(events);

      res.render('events', { title: 'SSTS', events: rows });
    });
  }else{
    const eventArray = [];
    fs.readdir(eventFilePath, function(err, files) {
      console.log(files);
      if(err) console.log(err);
      files.forEach(file => {
        const eventJson = JSON.parse(fs.readFileSync(`${eventFilePath}/${file}`, 'utf8'));
        eventArray.push(eventJson);
      });
      console.log("Got events:");
      console.log(eventArray);
      console.log("DB not enabled. Returning events from file system");
      res.render('events', { title: 'SSTS', events: eventArray });
    });
  }
});

module.exports = router;
