import express from 'express';
import cors from 'cors';
import { AppDataSource } from './data-source';
import userRoutes from './routes/user.routes';
import commentRoutes from './routes/comment.routes';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', commentRoutes);

const PORT = process.env.PORT || 8000;

AppDataSource.initialize()
  .then(() => {
    console.log('✅ Database connection secured.');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.error('Database init error:', error));
