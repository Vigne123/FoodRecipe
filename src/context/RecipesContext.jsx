import React, { createContext, useState } from 'react';

export const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  const deleteRecipe = (recipeName) => {
    setRecipes(recipes.filter(recipe => recipe.name !== recipeName));
    setFavorites(favorites.filter(fav => fav.name !== recipeName));
  };

  const toggleFavorite = (recipe) => {
    if (favorites.some(fav => fav.name === recipe.name)) {
      setFavorites(favorites.filter(fav => fav.name !== recipe.name));
    } else {
      setFavorites([...favorites, recipe]);
    }
  };

  return (
    <RecipesContext.Provider value={{ recipes, favorites, addRecipe, deleteRecipe, toggleFavorite }}>
      {children}
    </RecipesContext.Provider>
  );
};