const { compareByDate } = require('../utils/helpers');

const getGallery = (req, res, next) => {
    let renderType = "empty";
    let galleryOutput = "";

    console.log("Data from gallery:");
    console.log(req.data);

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
    const galleryOptions = {
        galleryOutput,
        renderType
    }
    req.galleryOptions = galleryOptions;
}

module.exports = { getGallery };
