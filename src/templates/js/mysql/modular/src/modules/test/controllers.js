const { checkDatabaseHealth } = require('./service');

async function healthCheck(req, res) {
  try {
    const dbHealth = await checkDatabaseHealth();
    res.status(200).json(dbHealth);
  } catch (error) {
    res.status(500).json({ error: 'Database is down' });
  }
}

module.exports = { healthCheck };