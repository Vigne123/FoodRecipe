import React from 'react';
import RecipeCard from './RecipeCard';

const recipes = [
  { name: 'Pizza', time: 50, image: 'pizza.jpg' },
  { name: 'Dal Fry', time: 30, image: 'dal_fry.jpg' },
  { name: 'Manchurian', time: 40, image: 'manchurian.jpg' }
];

export default function RecipeList() {
  return (
    <div className="recipe-list">
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </div>
  );
}
