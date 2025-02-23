import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyRecipes from "./pages/MyRecipes";
import Favorites from "./pages/Favourites";
import Login from "./pages/Login";
import ShareRecipe from "./pages/ShareRecipe";
import MainNavigation from "./components/MainNavigation";
import { RecipesProvider } from "./context/RecipesContext";
//import footerImage from "./assets/footer-image.jpg"; // Ensure this path is correct
import "./App.css";

export default function App() {
  return (
    <RecipesProvider>
      <Router>
        <div className="min-h-screen bg-gray-100 flex flex-col">
          <MainNavigation />

          {/* Routes */}
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/my-recipes" element={<MyRecipes />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/login" element={<Login />} />
              <Route path="/share-recipe" element={<ShareRecipe />} />
            </Routes>
          </div>

          {/* Footer */}
          <footer className="mt-10 bg-green-100 text-center py-4">
            <p className="text-gray-600">&copy; 2025 Recipe engineering</p>
          </footer>
        </div>
      </Router>
    </RecipesProvider>
  );
}