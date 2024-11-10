import mongoose from 'mongoose';
import config from '../../config/dev/database.json'; // Adjust the path for different environments

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;