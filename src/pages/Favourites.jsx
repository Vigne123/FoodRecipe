import React, { useContext } from 'react';
import { RecipesContext } from '../context/RecipesContext';
import RecipeCard from '../components/RecipeCard';

export default function Favorites() {
  const { favorites } = useContext(RecipesContext);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-green-600">Favorites</h2>
      {favorites.length === 0 ? (
        <p className="text-center text-gray-700">You have no favorite recipes yet. Start adding some delicious recipes to your favorites!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} showDeleteButton={true} />
          ))}
        </div>
      )}
    </div>
  );
}