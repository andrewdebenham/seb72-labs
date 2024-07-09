// import mongoose
const mongoose = require('mongoose');

// define the schema
const trackSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    }
});

// compile and export the schema
module.exports = mongoose.model('Track', trackSchema);