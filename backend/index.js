import { port } from './config/index.js';
import app from './app';
import connectDB from './db';
import cors from 'cors';

const start = async () => {
  try {
    console.log('Connecting to database');
    await connectDB();
    console.log('Connected to database');

     app.use(cors())

    await app.listen(port);
    console.log(`🚀  GraphQL server running at port: ${port}`);
  } catch {
    console.log('Not able to run GraphQL server');
  }
};

start();