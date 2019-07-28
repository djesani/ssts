const mysql = require('mysql');
const { db } = require('../config');

// const connection = mysql.createConnection({
//   host: db.host,
//   user: db.user,
//   password: db.password,
//   database: db.name
// });
//
// connection.connect((err) => {
//     if (err) console.log(err);
//     console.log('Connected to database!');
// });
//
// connection.on('error', (err) => {
//   console.log(err);
// });
//
// module.exports = connection;
