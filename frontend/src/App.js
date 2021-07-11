import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Route } from "react-router-dom";
import MyRecipes from "./screens/MyRecipes/MyRecipes";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import CreateRecipe from "./screens/CreateRecipe/CreateRecipes";
import SingleRecipe from "./screens/SingleRecipe/SingleRecipe";
import AccountScreen from "./screens/AccountScreen/AccountScreen";
import { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <BrowserRouter>
      <Header setSearch={setSearch} />
      <main>
        <Route path="/" component={LandingPage} exact />
        <Route path="/login" component={LoginScreen} exact />
        <Route path="/account" component={AccountScreen} exact />
        <Route path="/register" component={RegisterScreen} exact />
        <Route path="/createrecipe" component={CreateRecipe} exact />
        <Route path="/recipe/:id" component={SingleRecipe} exact />
        <Route
          path="/myrecipes"
          component={() => <MyRecipes search={search} />}
        />
      </main>
      <Footer />
    </BrowserRouter>
  );
};

// This is not JS! This is JSX:
/*
function App() {
  const hello = 1;

  return (
    <h1 className="App">Hello World {hello}</h1>
  );
}
*/

// Could also disply the same thing with this statement:
// const App = () => <h1  className="App">Hello World {hello}</h1>;

export default App;
