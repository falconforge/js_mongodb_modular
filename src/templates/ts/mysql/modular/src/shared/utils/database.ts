import mysql from 'mysql2/promise';
import fs from 'fs';
import path from 'path';

const env = process.env.NODE_ENV || 'dev';

const configPath = path.resolve(__dirname, `../../config/${env}/database.json`);
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

export const dbConnection = async () => {
  try {
    const connection = await mysql.createConnection({
      host: config.host,
      user: config.user,
      password: config.password,
      database: config.database,
    });
    console.log(`Connected to ${env} database`);
    return connection;
  } catch (error) {
    console.error('Database connection failed:', error);
    throw error;
  }
};