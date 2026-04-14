import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './server/routes/authRoutes.js';
import authMiddleware from './server/middleware/authMiddleware.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' ? 'https://your-vercel-app.vercel.app' : 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Protected route example
app.get('/api/protected', authMiddleware, (req, res) => {
  res.json({ message: 'Protected data', userId: req.user.id });
});

export default app;
