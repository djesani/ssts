const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'ssts',
  password: '55ts!',
  database: 'ssts'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

module.exports = connection;
