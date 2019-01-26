const webRoot = 'http://localhost:3000';

const renderGallery = function(req, res, albumRoot){
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
  res.render('gallery', { title: 'SSTS', galleryRoot: `${webRoot}/${albumRoot}`, galleryOutput, renderType });
}

module.exports = {
  renderGallery
};
