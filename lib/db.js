const env = process.env;
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'ssts.a2hosted.com',
  user: 'sstsahos_webapp',
  password: '55t5WebApp',
  database: 'sstsahos_ssts'
});

if(env.DB_ENABLED){
  connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
  });
}

module.exports = connection;
