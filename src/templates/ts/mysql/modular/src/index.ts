import express, { Application } from 'express';
import dotenv from 'dotenv';
import testRoutes from './modules/test/routes';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/test', testRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});