require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');

const app = express();

app.use(express.json()); // for parsing application/json
app.use('/api', authRoutes); // Mount the auth api routes

// Define a route for GET requests to the root URL ('/')
app.get('/', (req, res) => {
    res.send('Hello World!');
  });

// Start the server on port 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

