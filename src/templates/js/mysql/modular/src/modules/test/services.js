const db = require('./models');

async function checkDatabaseHealth() {
  return new Promise((resolve, reject) => {
    db.query('SELECT 1', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve({ status: 'Database is up and running!' });
      }
    });
  });
}

module.exports = { checkDatabaseHealth };