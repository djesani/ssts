const express = require('express');
const media = require('./media');
const path = require('path');

const router = express.Router();
const viewsPath = path.join(__dirname, '../views');
const galleryRoot = 'public/media';
const webRoot = 'http://localhost:3000';

const gallery = require('node-gallery')({
  staticFiles : galleryRoot,
  urlRoot : '/',
  render : false
});

router.use('/', gallery, function(req, res, next) {
    console.log("Data from gallery:");
    console.log(req.data);

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
    res.render(`${viewsPath}/gallery`, { title: 'SSTS', galleryRoot: `${webRoot}/media`, galleryOutput, renderType });
});

module.exports = router;
