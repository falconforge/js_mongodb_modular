import { Request, Response } from 'express';
import { checkDatabaseHealth } from './service';

export const healthCheck = async (req: Request, res: Response): Promise<void> => {
  const isDbHealthy = await checkDatabaseHealth();
  if (isDbHealthy) {
    res.json({ message: 'Server and database are up and running!' });
  } else {
    res.status(500).json({ message: 'Database connection failed!' });
  }
};