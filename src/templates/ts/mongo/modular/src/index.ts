import express from 'express';
import dotenv from 'dotenv';
import connectDB from './shared/utils/database';
import testRoutes from './modules/test/routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/test', testRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});