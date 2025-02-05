//connessione al db
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'rootroot',
  database: 'blog',
  port: 3306
})

connection.connect((e) => {
  if (e) throw e;
  console.log('MySQL connesso');
})

module.exports = connection;