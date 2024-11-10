import { dbConnection } from '../../shared/utils/database';

export const checkDatabaseHealth = async (): Promise<boolean> => {
  try {
    const connection = await dbConnection();
    const [rows] = await connection.execute('SELECT 1');
    await connection.end();
    return rows.length > 0;
  } catch (error) {
    console.error('Error checking database health:', error);
    return false;
  }
};