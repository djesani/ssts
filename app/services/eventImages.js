
const getNoEventImg = function(){
    const min=1;
    const max=4;
    console.log("Generating random number");
    const random = Math.floor(Math.random() * (+max - +min)) + +min;
    console.log("Random number generated: " + random);

//service
    const imageurl = `${imgBasePath}/images/no-events/${random}.png`;
    const lowimageurl = '';
    // const imageurl = `${imageBasePath}/events/no-events/${random}.png`;
    // const lowimageurl = `${imageBasePath}/events/no-events/${random}-lowly.png`;
    return { imageurl, lowimageurl };
}

const eventArray = [];
const futureEvents = [];
const pastEvents = [];
const now = new Date();
const todayDate = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();

const generateLowResImage = function(event){
    event.lowimageurl = event.imageurl.replace('.jpg', '-lowly.jpg');
}

const getEvent = function(event_filePath, imgBasePath){
  let eventToday = {
    "startDate": 946645200000,
    "endDate": 946645200000,
    "name": "Future event placeholder",
    "isPlaceholder" : true
  }
  try{
    fs.readdir(event_filePath, function(files) {
      console.log(files);
      files.forEach(file => {
        const eventJson = JSON.parse(fs.readFileSync(`${event_filePath}/${file}`, 'utf8'));
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

      if(futureEvents.length > 0 || eventToday.isEventToday){
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


    });
  }catch(err){
    console.log(err);
  }
}




//module.exports = futureEvents, pastEvents, eventToday?
module.exports = getNoEventImg, getEvent;
