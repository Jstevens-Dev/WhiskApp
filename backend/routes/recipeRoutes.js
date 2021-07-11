const express = require('express');
const { 
    getRecipes, 
    createRecipe, 
    getRecipeById, 
    updateRecipe,
    deleteRecipe 
} = require('../controllers/recipeController');
const { protect } = require('../middlewares/authMiddleware');


const router = express.Router();

router.route('/').get(protect, getRecipes);
router.route('/create').post(protect, createRecipe);
router.route('/:id').get(protect, getRecipeById).put(protect, updateRecipe).delete(protect, deleteRecipe);

module.exports = router;