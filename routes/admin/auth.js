const db = require('../../lib/db');
const { basicAuth, localAuth } = require('../../app/utils/strategies');
const express = require('express');
const router = express.Router();

router.post('/basic',
    basicAuth.authenticate('basic'), function(req, res, next) {
    const user = req.user;
    console.log(user);
    // db.query(`SELECT * FROM user where username = '${user.username}'`, (err,rows) => {
    //     if(err) throw err;
    //     console.log('Got email rows:');
    //     console.log(rows);
    //
    //     const dbPass = rows[0].password;
    //     if(user.password === dbPass){
    //         console.log('Password matched db!');
    //         res.send('OK');
    //     }else{
    //         console.log('User not found. Returning 401 error!');
    //         res.status(401).send('UNAUTHORIZED');
    //     }
    // });
    if( user.username === 'admin' && user.password === 'Swaminarayan19'){
        console.log('Password matched!');
        res.send('OK');
    }else{
        console.log('User not matched. Returning 401 error!');
        res.status(401).send({status: 'UNAUTHORIZED', message: 'Unauthorized to login. Check credentials are correct.'});
    }
});

router.post('/local',
    localAuth.authenticate('local'), function(req, res, next) {
    console.log(req.user);
    res.send('OK');
});

router.get('/user', function(req, res){
    console.log(req.user);
    res.send(req.user);
});

router.get('/logout', function(req, res){
  req.logout();
  res.send(null)
});

module.exports = router;
