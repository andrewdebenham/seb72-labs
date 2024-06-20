// set up the environment
require('dotenv').config();

// get libraries
const mongoose = require('mongoose');
const express = require('express');
const methodOverride = require('method-override');

// create a server
const server = express();

// configure the server
server.use(express.urlencoded({ extended: false }));
server.use(methodOverride('_method'));


// configure the database
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}`);
});

// load the model
const Item = require('./models/item.js')

// start the server
server.listen(3000, () => {
    console.log('Server is listening at https://localhost:3000/');
});


// ROUTES
// landing page
server.get('/', (req, res) => {
    res.render('index.ejs');
});

// new
server.get('/items/new', (req, res) => {
    res.render('items/new.ejs')
});

// create
server.post('/items', async (req, res) => {
    await Item.create(req.body);
    res.redirect('/items');
});

// index
server.get('/items', async (req, res) => {
    const items = await Item.find({});
    res.render('items/index.ejs', { items: items });
});

// show
server.get('/items/:id', async (req, res) => {
    const item = await Item.findById(req.params.id);
    res.render('items/show.ejs', {item: item});
});

// edit
server.get('/items/:id/edit', async (req, res) => {
    const item = await Item.findById(req.params.id);
    res.render('items/edit.ejs', { item: item });
});

// update
server.put('/items/:id', async (req, res) => {
    await Item.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/items/' + req.params.id);
});

// delete
server.delete('/items/:id', async (req, res) => {
    await Item.findByIdAndDelete(req.params.id);
    res.redirect('/items');
});