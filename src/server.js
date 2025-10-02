import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectMongoDB } from './db/connectMongoDB';
import { notFoundHendler } from './middleware/notFoundHandler';
import { logger } from './middleware/logger';
import { errorHandler } from './middleware/errorHandler';
import notesRoutes from './routes/notesRoutes.js';

const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.json());

app.use(cors());
app.use(logger);

app.use(notesRoutes);

app.get('/test-error', (req, res) => {
  throw new Error('Simulated server error');
});

app.use(notFoundHendler);

app.use(errorHandler);

await connectMongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
