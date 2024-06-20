const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.get('/', async (req, res) => {
    const users = await User.find({});
    res.render('users/index.ejs', {
        users: users
    });
});

router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    res.render('users/show.ejs', {
        user: user,
        foods: user.pantry,
    });
})


module.exports = router;