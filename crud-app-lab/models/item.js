// Initialise mongoose
const mongoose = require('mongoose');

// Define the schema
const itemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number,
});

// Compile the schema into model
const Item = mongoose.model('Item', itemSchema);

// Export model
module.exports = Item;