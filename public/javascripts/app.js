//const env = process.env;

const express = require('express');
 const router = express.Router();
 const path = require('path');
//
 const eventFilePath = path.join(__dirname, '../public/events/');

const element = document.querySelector('form');
router.get('/', function(req, res, next) {
  element.addEventListener('submit', event => {

    event.preventDefault();
    console.log('Form submission cancelled.');

    var formVal = $('#adminForm :input');
    // console.log( inval);
    // var inval2 = inval[1].value;
    // console.log("ival2 " + inval2);

    var inval3 = {};
    for (var i = 0; i < formVal.length-1; i++) {
      //    inval[i].value = inval3[i];
      console.log("inval3 " + formVal[i].value);
    }

  });
});
// app.get('/', function(req, res) {
//   res.send("Yep it's working");
// });

//--trial--

// var path = require('path'),
//     fs = require('fs');
//
// function ensureDirectoryExistence(filePath) {
//   var dirname = path.dirname(filePath);
//   if (fs.existsSync(dirname)) {
//     return true;
//   }
//   ensureDirectoryExistence(dirname);
//   fs.mkdirSync(dirname);
// }

// function SaveDatFileBro(localstorage) {
// localstorage.root.getFile("info.txt", {create: true}, function(DatFile) {
//   DatFile.createWriter(function(DatContent) {
//     var blob = new Blob(["Lorem Ipsum"], {type: "text/plain"});
//     DatContent.write(blob);
//     console.log("file save");
//       localstorage.root.getFile("info.txt", {create: false});
//   });
// });
// SaveDatFileBro(Desktop);
