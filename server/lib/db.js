const env = process.env;
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'ssts',
  password: '55ts!',
  database: 'ssts'
});

if(env.DB_ENABLED){
  connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
  });
}

module.exports = connection;
