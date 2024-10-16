const express = require('express');
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./config/db');
require('dotenv').config();
const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', userRoutes);

module.exports = app;
