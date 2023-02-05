const dbPool = require('../../lib/db');
const express = require('express');
const router = express.Router();

router.post('/subscribe', async (req, res, next) => {
    const subscriber = req.body;
    console.log("Got subscriber:");
    console.log(subscriber);

    const getUser = `SELECT * FROM subscriber where email = '${subscriber.email}'`;
    const createUser = `INSERT INTO subscriber VALUES ('','${subscriber.email}', '${subscriber.name}',${new Date().getTime()})`;

    try {
        const rows = await dbPool.query(getUser);
        console.log('Got email rows:');
        console.log(rows);
        const dbEmail = rows && rows[0] ? rows[0].email : '';

        if(dbEmail === subscriber.email){
            console.log("Found email in system already. Ignoring!");
            res.send("Email exists");
        }else{
            console.log(`Creating user: ${createUser}`);
            const result = await dbPool.query(createUser);
            console.log(result);
            res.send("OK");
        }
    } catch(err) {
        throw new Error(err);
    }
});

module.exports = router;
