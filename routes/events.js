const env = process.env;

const db = require('../lib/db');
const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();

const eventFilePath = path.join(__dirname, '../public/events/');

const now = new Date();
const todayDate = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();

const compareByDate = function (a,b) {
  if (a.startDate < b.startDate)
    return 1;
  if (a.startDate > b.startDate)
    return -1;
  return 0;
}

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
    const futureEvents = [];
    const pastEvents = [];
    let eventToday = {};

    fs.readdir(eventFilePath, function(err, files) {
      console.log(files);
      if(err) console.log(err);
      files.forEach(file => {
        const eventJson = JSON.parse(fs.readFileSync(`${eventFilePath}/${file}`, 'utf8'));
        eventArray.push(eventJson);
      });

      console.log("Today's date: " + todayDate);
      eventArray.sort(compareByDate).forEach(event => {
        console.log("Event startDate: " + event.startDate);
        if(event.startDate > todayDate){
          console.log("A future event exists, adding to future list.");
          futureEvents.push(event);
        }else if(event.startDate === todayDate){
          console.log("An event is on today!");
          eventToday = event;
        }else{
          pastEvents.push(event);
        }
      });

      console.log("Future events:");
      console.log(futureEvents);
      console.log("Past events:");
      console.log(pastEvents);

      console.log("DB not enabled. Returning events from file system");
      res.render('events', { title: 'SSTS', futureEvents, pastEvents, eventToday });
    });
  }
});

module.exports = router;
