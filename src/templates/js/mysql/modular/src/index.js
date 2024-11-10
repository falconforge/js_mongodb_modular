const express = require('express');
const testRoutes = require('./modules/test/routes');
const app = express();

// Middleware for JSON parsing
app.use(express.json());

// Import test routes
app.use('/api/test', testRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});