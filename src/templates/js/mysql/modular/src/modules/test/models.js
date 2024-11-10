const mysql = require('mysql2');
const config = require(`../config/${process.env.NODE_ENV || 'dev'}/database.json`);

const connection = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
});

connection.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.message);
  } else {
    console.log('Connected to the MySQL database');
  }
});

module.exports = connection;