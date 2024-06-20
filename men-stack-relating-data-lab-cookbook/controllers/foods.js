const express = require('express');
const router = express.Router();

const User = require('../models/user');

// Index
router.get('/', async (req, res) => {
    try {
        const user = await User.findById(req.session.user._id)
        res.render('foods/index.ejs', {
            foods: user.pantry,
        });
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

// New
router.get('/new', (req, res) => {
    res.render('foods/new.ejs');
});

// Create
router.post('/', async (req, res) => {
    try {
        // get the user
        const user = await User.findById(req.session.user._id);
        // add the food within the user object
        user.pantry.push(req.body);
        // save the user
        await user.save();
        // redirect back to index view
        res.redirect(`/users/${user._id}/foods`); // GET
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

// show
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.session.user._id); // get the user
        const food = user.pantry.id(req.params.id); // get users specific food
        res.render('foods/show.ejs', {
            food: food,
        });
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

// Edit
router.get('/:id/edit', async (req, res) => {
    try {
        const user = await User.findById(req.session.user._id); // get the user
        const food = user.pantry.id(req.params.id); // get users specific food
        res.render('foods/edit.ejs', {
            food: food,
        });
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

// Update
router.put('/:id', async (req, res) => {
    try {
        // find the user
        const user = await User.findById(req.session.user._id);
        // find currect food
        const food = user.pantry.id(req.params.id);
        // use mongoose .set() method to update the body with new info
        food.set(req.body);
        // save the current user
        await user.save();
        // redirect
        res.redirect(`/users/${user._id}/foods/${food._id}`);
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

// Delete
router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.session.user._id); // get the user
        user.pantry.id(req.params.id).deleteOne(); // get the specific food and delete it
        await user.save();
        res.redirect('/');
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

module.exports = router;