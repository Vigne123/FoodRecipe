import React, { useContext } from 'react';
import { RecipesContext } from '../context/RecipesContext';
import RecipeCard from '../components/RecipeCard';

export default function MyRecipes() {
  const { recipes } = useContext(RecipesContext);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-green-600">My Recipes</h2>
      {recipes.length === 0 ? (
        <p className="text-center text-gray-700">You have no recipes yet. Start adding some delicious recipes!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} showDeleteButton={true} />
          ))}
        </div>
      )}
    </div>
  );
}