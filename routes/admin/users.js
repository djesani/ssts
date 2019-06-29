const env = process.env;

const db = require('../../lib/db');
const express = require('express');
const router = express.Router();

router.post('/subscribe', function(req, res, next) {
    const subscriber = req.body;
    console.log("Got subscriber:");
    console.log(subscriber);

    if(env.DB_ENABLED){
      db.query(`SELECT * FROM subscriber where email = '${subscriber.email}'`, (err,rows) => {
        if(err) throw err;
        console.log('Got email rows:');
        console.log(rows);
        const dbEmail = rows[0].email;

        if(dbEmail === subscriber.email){
          console.log("Found email in system already. Ignoring!");
          res.send("Email exists");
        }else{
          const updateQuery = `INSERT INTO subscriber VALUES ('','${subscriber.email}', '${subscriber.name}',${new Date().getTime()})`;
          console.log(updateQuery);
          db.query(updateQuery, (err, result) => {
            if(err) throw err;
            console.log(result);
            res.send("OK");
          })
        }
      });
    }else{
      res.send("OK");
    }
});

module.exports = router;
