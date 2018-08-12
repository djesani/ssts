const env = process.env;

const db = require('../lib/db');
const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  if(env.DB_ENABLED){
    db.query('SELECT * FROM event where enabled = 1', (err,rows) => {
      if(err) throw err;
      const events = JSON.stringify(rows);
      console.log('Got events:');
      console.log(events);

      res.render('events', { title: 'SSTS', events: rows });
    });
  }else{
    console.log("DB not enabled. Returning empty rows");
    res.render('events', { title: 'SSTS', events: [] });
  }
});

module.exports = router;
