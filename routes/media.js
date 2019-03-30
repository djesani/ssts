const express = require('express');
const path = require('path');

const router = express.Router();
const viewsPath = path.join(__dirname, '../views');
const galleryRoot = 'public/media';

const galleryMiddleware = require('node-gallery')({
  staticFiles : galleryRoot,
  urlRoot : '/',
  render : false
});

const compareByDate = function (a,b) {
  if (new Date(a.name) < new Date(b.name))
    return 1;
  if (new Date(a.name) > new Date(b.name))
    return -1;
  return 0;
}

router.use('/', galleryMiddleware, function(req, res, next) {
    console.log("Data from gallery:");
    console.log(req.data);

    let renderType = "empty";
    let galleryOutput = "";

    if(req.data.albums.length > 0){
        console.log("Returning album view");
        renderType = "album";
        const sortedAlbums = req.data.albums.sort(compareByDate);
        // console.log("Sorted albums:");
        // console.log(sortedAlbums);
        galleryOutput = sortedAlbums;
    }else if(req.data.photos.length > 0){
        console.log("Returning photo view");
        renderType = "photo";
        galleryOutput = req.data.photos;
    }else{
        console.log("No photo or album found");
    }
    res.render(`${viewsPath}/gallery`, { title: 'SSTS', galleryRoot: '/media', galleryOutput, renderType });
});

module.exports = router;
