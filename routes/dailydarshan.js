const express = require('express');
const media = require('./media');
const path = require('path');

const router = express.Router();
const viewsPath = path.join(__dirname, '../views');
const dailyDarshanRoot = 'public/daily-darshan';
const webRoot = 'http://localhost:3000';

const dailyDarshan = require('node-gallery')({
  staticFiles : dailyDarshanRoot,
  urlRoot : '/',
  render : false
});

router.use('/', dailyDarshan, function(req, res, next) {
    console.log("Data from DD:");
    console.log(req.data);
    // media.renderGallery(req, res, 'daily-darshan');

    let renderType = "empty";
    let galleryOutput = "";

    if(req.data.albums.length > 0){
        console.log("Returning album view");
        renderType = "album";
        galleryOutput = req.data.albums;
    }else if(req.data.photos.length > 0){
        console.log("Returning photo view");
        renderType = "photo";
        galleryOutput = req.data.photos;
    }else{
        console.log("No photo or album found");
    }
    res.render(`${viewsPath}/daily-darshan`, { title: 'SSTS', dailyDarshanRoot: `${webRoot}/daily-darshan`, galleryOutput, renderType });
});

module.exports = router;
