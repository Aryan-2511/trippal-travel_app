const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./controllers/authController');
const cors = require('cors');


const app = express();

connectDB();
app.use(cors());
app.use(express.json());

app.use('/api/auth',authRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = app;
