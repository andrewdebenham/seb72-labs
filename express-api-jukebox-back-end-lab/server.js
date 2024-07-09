// configure the environment and import libraries
require('dotenv').config();
const express = require('express');
const server = express();
const cors = require('cors');
const mongoose = require('mongoose');

// import router
const tracksController = require('./controllers/tracks');

// connect databasa
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB ' + mongoose.connection.name);
});

// middleware
server.use(express.json());
server.use(cors());

// Routes
server.use('/tracks', tracksController);

// start the server
server.listen(3000, () => {
    console.log('Server is listening at http://localhost:3000/');
});