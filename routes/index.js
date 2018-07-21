const db = require('../lib/db');
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // db.query('SELECT * FROM event where enabled = 1', (err,rows) => {
  //   if(err) throw err;
  //   const events = JSON.stringify(rows);
  //   console.log('Got events:');
  //   console.log(events);
  //   res.render('index', { title: 'SSTS', events: rows });
  // });
  res.render('index', { title: 'SSTS' });
});

router.get('/events', function(req, res, next) {
  db.query('SELECT * FROM event where enabled = 1', (err,rows) => {
    if(err) throw err;
    const events = JSON.stringify(rows);
    console.log('Got events:');
    console.log(events);
    // res.render('index', { title: 'SSTS', events: rows });
    res.send(events);
  });
});

module.exports = router;
