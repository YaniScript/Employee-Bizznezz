// connect to the database
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  // password: 'password',
  database: ''
})
connection.connect(function (err) {
    if (err) throw err
})

module.exports = connection