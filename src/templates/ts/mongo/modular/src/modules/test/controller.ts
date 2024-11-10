import { Request, Response } from 'express';
import mongoose from 'mongoose';

export const healthCheck = (req: Request, res: Response): void => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
  res.status(200).json({
    status: 'OK',
    database: dbStatus,
  });
};