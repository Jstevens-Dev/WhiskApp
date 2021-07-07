const express = require("express");
const recipes = require('./data/recipes');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.get('/', (req,res) => {
    res.send("API is running...")
});

// Get all recipes
app.get('/api/recipes', (req,res) =>{
    res.json(recipes)
});

// Get specific recipe
app.get('/api/recipes/:id', (req,res) => {
    const recipe = recipes.find((n) => n._id === req.params.id);

    res.send(recipe);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on ${PORT}`));
