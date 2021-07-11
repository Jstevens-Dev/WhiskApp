const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const recipeRoutes = require("./routes/recipeRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const path = require("path");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

// Get all recipes
//app.get('/api/recipes', (req,res) =>{
//    res.json(recipes)
//});

/*
// Get specific recipe
app.get('/api/recipes/:id', (req,res) => {
    const recipe = recipes.find((n) => n._id === req.params.id);

    res.send(recipe);
})
*/

app.use("/api/users", userRoutes);
app.use("/api/recipes", recipeRoutes);

// ------------------------Deployment------------------------

__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

// ------------------------Deployment------------------------

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on ${PORT}`));
