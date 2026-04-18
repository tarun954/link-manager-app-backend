import express from 'express';
import cors from 'cors';

import linkRoutes from './routes/linkRoutes.js';

const app = express(); // ✅ FIRST declare app

// ✅ Middlewares
app.use(cors());
app.use(express.json());

// ✅ Routes (AFTER app is created)
app.use('/api/links', linkRoutes);


// ✅ Test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

export default app;