const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const errorHandler = require('./middlewares/errorMiddleware');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Logger HTTP (Morgan)
// O formato 'dev' mostra: :method :url :status :response-time ms - :res[content-length]
app.use(morgan('dev'));

// Basic Route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend Server is running.' });
});

// Route for testing centralized error handling
app.get('/api/error-test', (req, res, next) => {
  try {
    throw new Error('Este é um erro de teste disparado de propósito!');
  } catch (error) {
    next(error);
  }
});

// Centralized Error Handling Middleware (must be registered last)
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
