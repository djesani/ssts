const mysql = require('mysql');
const util = require('util');
const { db } = require('../config');

const dbPool = mysql.createPool({
      host: db.host,
      user: db.user,
      password: db.password,
      database: db.name
})

// Ping database to check for common exception errors.
dbPool.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed.')
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has too many connections.')
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused.')
    }
  }

  if (connection) connection.release()

  return
})

// Promisify for Node.js async/await.
dbPool.query = util.promisify(dbPool.query)

module.exports = dbPool

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
