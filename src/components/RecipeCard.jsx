import React, { useContext, useState } from 'react';
import { RecipesContext } from '../context/RecipesContext';
import '../styles/RecipeCard.css';

export default function RecipeCard({ recipe, showDeleteButton }) {
  const { deleteRecipe, toggleFavorite, favorites } = useContext(RecipesContext);
  const [showPopup, setShowPopup] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const isFavorite = favorites.some(fav => fav.name === recipe.name);

  const handleToggleFavorite = () => {
    toggleFavorite(recipe);
    console.log('Favorite toggled', recipe.name);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000); // Hide popup after 2 seconds
  };

  const handleDelete = () => {
    deleteRecipe(recipe.name);
    console.log('Recipe deleted', recipe.name);
  };

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="recipe-card bg-white p-4 rounded-lg shadow-lg">
      <img src={recipe.image} alt={recipe.name} className="recipe-image w-full h-48 object-cover rounded-lg mb-4" />
      <h3 onClick={handleToggleDetails} className="text-xl font-bold mb-2 cursor-pointer">{recipe.name}</h3>
      <p className="text-gray-700 mb-4">⏱ {recipe.time} min</p>
      {showDetails && (
        <div className="recipe-details mb-4">
          <p className="text-gray-700"><strong>Ingredients:</strong> {recipe.ingredients}</p>
          <p className="text-gray-700"><strong>Description:</strong> {recipe.description}</p>
        </div>
      )}
      <div className="flex justify-between items-center">
        <button onClick={handleToggleFavorite} className={`px-4 py-2 rounded-lg ${isFavorite ? 'bg-[#f1791e] text-white' : 'bg-gray-200 text-gray-700'}`}>❤️</button>
        {showDeleteButton && (
          <button onClick={handleDelete} className="px-4 py-2 bg-[#f1791e] text-white rounded-lg">🗑️</button>
        )}
      </div>
      {showPopup && (
        <div className="popup bg-green-500 text-white p-2 rounded-lg absolute top-0 right-0 mt-2 mr-2">
          Added to favorites!
        </div>
      )}
    </div>
  );
}