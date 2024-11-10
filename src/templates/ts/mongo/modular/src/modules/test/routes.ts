import express from 'express';
import { healthCheck } from './controller';

const router = express.Router();

// Health check route
router.get('/health', healthCheck);

export default router;