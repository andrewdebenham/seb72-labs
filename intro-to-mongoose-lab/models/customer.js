const mongoose = require('mongoose');

// Define the schema
const customerSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

// Compile the model
const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;