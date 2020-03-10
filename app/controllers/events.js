const { compareByDate } = require('../utils/helpers');
const { eventFilePath, imageBasePath } = require('../config');
const {getNoEventImg} = require('../services/eventImages');


// const NoEventImage = async (req, res, next) =>{
//   try {
//     const noEventImg = await getNoEventImg(imageBasePath);
//   } catch (e) {
//     console.log(e);
//   }
// }

const db = require('../lib/db');
const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();



const eventImages = async (req, res, next) =>{
  try{
    const getEventImg = await getEvent(eventFilePath, imageBasePath);
  }catch(e){
    console.log("DB not enabled. Returning events from file system");
    res.render('events', { title: 'SSTS', futureEvents, pastEvents, eventToday });
  }
}



module.export eventImages;
