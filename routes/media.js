const express = require('express');
const { mediaRootDir } = require('../config');
const asyncMiddleware = require('../app/utils/asyncMiddleware');
const { getGallery } = require('../app/controllers');
const path = require('path');
const viewsPath = path.join(__dirname, '../views');

const router = express.Router();

const galleryMiddleware = require('node-gallery')({
  staticFiles : mediaRootDir,
  urlRoot : '/',
  render : false
});

router.use('/',
    galleryMiddleware,
    asyncMiddleware(getGallery),
    (req, res, next ) => {
        const { galleryOutput, renderType } = req.galleryOptions;
        res.render(`${viewsPath}/gallery2`, { title: 'SSTS', galleryRoot: '/media', galleryOutput, renderType });
    }
);

module.exports = router;
