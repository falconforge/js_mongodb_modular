const express = require('express');
const { healthCheck } = require('./controller');
const { validateRequest } = require('../../shared/middlewares/SchemaValidator');
const Joi = require('joi');

const router = express.Router();

// Define Joi schema
const healthCheckSchema = Joi.object({
  check: Joi.boolean().optional(),
});

// Health check route with validation middleware
router.get('/health', validateRequest(healthCheckSchema), healthCheck);

module.exports = router;