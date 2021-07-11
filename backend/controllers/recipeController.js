const asyncHandler = require("express-async-handler");
const Recipe = require("../models/recipeModel");

const getRecipes = asyncHandler(async (req, res) => {
    const recipes = await Recipe.find({ user: req.user._id });
    res.json(recipes);
});

const createRecipe = asyncHandler (async (req, res) => {
    const { title, content, category } = req.body;

    if (!title || !content || !category) {
        res.status(400);
        throw new Error("Please fill all the fields!");
    } else {
        const recipe = new Recipe({user: req.user._id, title, content, category});

        const createdRecipe = await recipe.save();

        res.status(201).json(createdRecipe);
    }
});

const getRecipeById = asyncHandler (async (req, res) => {
    const recipe = await Recipe.findById(req.params.id);

    if (recipe) {
        res.json(recipe);
    } else {
        res.status(404).json({ message: "Recipe not found." });
    }
});

const updateRecipe = asyncHandler (async (req, res) => {
    const { title, content, category } = req.body;

    const recipe = await Recipe.findById(req.params.id);

    if (recipe.user.toString() !== req.user._id.toString()) {
        res.status(401);
        throw new Error("You cannot preform this action!");
    }

    if (recipe) {
        recipe.title = title;
        recipe.content = content;
        recipe.category = category;

        const updatedRecipe = await recipe.save();
        res.json(updatedRecipe);
    } else {
        res.status(404);
        throw new Error("Recipe not found.");
    }
});

const deleteRecipe = asyncHandler (async (req, res) => {
    const recipe = await Recipe.findById(req.params.id);

    if (recipe.user.toString() !== req.user._id.toString()) {
        res.status(401);
        throw new Error("You cannot preform this action!");
    }

    if (recipe) {
        await recipe.remove();
        res.json({message: "Recipe removed."});
    } else {
        res.status(404);
        throw new Error("Recipe not found.");
    }
});

module.exports = { getRecipes, createRecipe, getRecipeById, updateRecipe, deleteRecipe };