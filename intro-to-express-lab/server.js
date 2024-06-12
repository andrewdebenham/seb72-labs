const express = require('express');

const server = express();

server.use(express.json()); // Middleware to enable JSON ?

server.listen(3000, () => {
    console.log('Server is listening at http://localhost:3000');
});


// 1. Be Polite, Greet the User

server.get('/greetings/:name', (req, res) => {
    res.send(`Oh hello there, ${req.params.name}`);
});


// 2. Rolling the Dice

server.get('/roll/:number', (req, res) => {
    const number = req.params.number;
    const regex = /[A-Za-z]/;

    if (regex.test(number)) {
        res.send('You must specify a number');
    } else {
        const num = parseInt(number, 10);
        res.send(`You rolled a ${Math.floor(Math.random() * num)}`);
    }
});


// 3. I Want THAT One!

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

server.get('/collectibles/:index', (req, res) => {
    const index = parseInt(req.params.index, 10);
    if (index < 0 || index >= collectibles.length) {
        res.send('This item is not yet in stock. Check back soon!');
    } else {
        res.send(`So, you want the ${collectibles[index].name}? For $${collectibles[index].price}, it can be yours!`);
    }
});


// 4. Filter Shoes by Query Parameters

// Not sure if the below is correct - couldn't get filteredShoes to show in the browser
// It just produced an empty array regardless of the query data I entered

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

server.get('/shoes', (req, res) => {
    const minPrice = parseInt(req.query['min-price'], 10);
    const maxPrice = parseInt(req.query['max-price'], 10);
    const type = req.query.type;

    const filteredShoes = shoes.filter((shoe) => {
        shoe.price >= minPrice && shoe.price <= maxPrice && shoe.type === type;
    });

    res.json(filteredShoes);
});