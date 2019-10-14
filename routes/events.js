const db = require('../lib/db');
const fs = require('fs');
const path = require('path');
const express = require('express');
const { eventFilePath, imageBasePath } = require('../config');
const router = express.Router();

const now = new Date();
const todayDate = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();

const compareByDate = function (a,b) {
  if (a.startDate < b.startDate)
    return 1;
  if (a.startDate > b.startDate)
    return -1;
  return 0;
}

const getNoEventImg = function(){
    const min=1;
    const max=4;
    console.log("Generating random number");
    const random = Math.floor(Math.random() * (+max - +min)) + +min;
    console.log("Random number generated: " + random);

    const imageurl = `${imageBasePath}/images/no-events/${random}.png`;
    const lowimageurl = '';
    // const imageurl = `${imageBasePath}/events/no-events/${random}.png`;
    // const lowimageurl = `${imageBasePath}/events/no-events/${random}-lowly.png`;
    return { imageurl, lowimageurl };
}

const generateLowResImage = function(event){
    event.lowimageurl = event.imageurl.replace('.jpg', '-lowly.jpg');
}

router.get('/', function(req, res, next) {
    const eventArray = [];
    const futureEvents = [];
    const pastEvents = [];
    let eventToday = {
      "startDate": 946645200000,
      "endDate": 946645200000,
      "name": "Future event placeholder",
      "isPlaceholder" : true
    }

    fs.readdir(eventFilePath, function(err, files) {
      console.log(files);
      if(err) console.log(err);
      files.forEach(file => {
        const eventJson = JSON.parse(fs.readFileSync(`${eventFilePath}/${file}`, 'utf8'));
        eventJson.imageurl = imageBasePath + eventJson.imageurl;
        eventArray.push(eventJson);
      });

      console.log("Today's date: " + todayDate);
      eventArray.sort(compareByDate).forEach(event => {
        console.log("Event startDate: " + event.startDate);
        console.log("Event publishDate: " + event.publishDate);
        generateLowResImage(event);

        const publishEvent = event.publishDate == undefined || event.publishDate <= todayDate ? true : false;

        if(publishEvent && !event.unpublished){
            if(event.startDate > todayDate){
              console.log("A future event exists, adding to future list.");
              futureEvents.push(event);
            }else if(event.startDate === todayDate || (event.startDate <= todayDate && event.endDate >= todayDate)){
              console.log("An event is on today!");
              eventToday = event;
              eventToday['isEventToday'] = true;
            }else{
              pastEvents.push(event);
            }
        }else{
            console.log(`Event: ${event.name} NOT PUBLISHED. Publish date in future or event marked as Unpublished!`);
        }
      });

      console.log(`Future events: ${futureEvents.length}`);

      // Reverse order for future events only
      if(futureEvents.length > 0){
          futureEvents.reverse();
      }

      if(futureEvents.length < 4){
        const maxEvents = eventToday.isEventToday === true ? 3 : 4;
        console.log(`Future events: ${futureEvents.length}. We need to add placeholder to fill the row!`);

        for (let i = futureEvents.length; i < maxEvents; i++){
          console.log("Adding placeholderEvent to future events");
          const { imageurl, lowimageurl } = getNoEventImg();
          var newFutureEvent = {
            "startDate": 2524568400000,
            "endDate": 2524568400000,
            "name": "Future event placeholder",
            "imageurl": imageurl,
            "lowimageurl": lowimageurl,
            "isPlaceholder" : true
          };
          futureEvents.push(newFutureEvent);
        }
      }

      console.log("Future events:");
      console.log(futureEvents);
      console.log("Past events:");
      console.log(pastEvents);

      console.log("DB not enabled. Returning events from file system");
      res.render('events', { title: 'SSTS', futureEvents, pastEvents, eventToday });
    });
});

module.exports = router;
