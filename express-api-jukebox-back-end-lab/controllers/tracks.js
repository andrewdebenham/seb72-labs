// import the model
const Track = require('../models/track');

// import and compile router
const express = require('express');
const router = express.Router();

// Routes
// Create
router.post('/', async (req, res) => {
    try {
        const track = await Track.create(req.body);
        res.json(track);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
});

// Index
router.get('/', async (req, res) => {
    try {
        const tracks = await Track.find({});
        res.json(tracks);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
});

// Show
router.get('/:id', async (req, res) => {
    try {
        const track = await Track.findById(req.params.id);
        if (!track) {
            return res.status(404).json({message: 'Track not found'});
        }
        res.json(track);
    } catch (error) {
        console.error(erorr);
        res.status(500).json({message: error.message});
    }
});

// Update
router.put('/:id', async (req, res) => {
    try {
        const track = await Track.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        if (!track) {
            return res.status(404).json({message: 'Track not found'});
        }
        res.json(track);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
});

// Delete
router.delete('/:id', async (req, res) => {
    try {
        const track = await Track.findByIdAndDelete(req.params.id);
        if (!track) {
            return res.status(404).json({message: 'Track not found'});
        }
        res.json(track);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
});

// export the router
module.exports = router;