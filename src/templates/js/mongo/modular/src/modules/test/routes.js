import express from 'express'
import { healthCheck } from './controller.js'

const router = express.Router()

// Health check route
router.get('/health', healthCheck)

export default router