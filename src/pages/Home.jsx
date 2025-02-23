import React, { useContext } from 'react';
import { RecipesContext } from '../context/RecipesContext';
import RecipeCard from '../components/RecipeCard';

const dummyRecipes = [
  { 
    name: 'Pizza', 
    image: 'https://www.allrecipes.com/thmb/fFW1o307WSqFFYQ3-QXYVpnFj6E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/48727-Mikes-homemade-pizza-DDMFS-beauty-4x3-BG-2974-a7a9842c14e34ca699f3b7d7143256cf.jpg', 
    time: 30,
    ingredients: ['Dough', 'Tomato Sauce', 'Cheese', 'Pepperoni'],
    description: 'A delicious homemade pizza with a crispy crust and savory toppings.'
  },
  { 
    name: 'Pasta', 
    image: 'https://www.spicebangla.com/wp-content/uploads/2024/08/Spicy-Pasta-recipe-optimised-scaled.webp', 
    time: 45,
    ingredients: ['Pasta', 'Tomato Sauce', 'Garlic', 'Basil'],
    description: 'A spicy pasta dish with a rich tomato sauce and fresh herbs.'
  },
  { 
    name: 'Strawberry Tart', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd5uf-BwDz8a6tDd0AH0-62RP_QrhcGiYTtQ&s', 
    time: 20,
    ingredients: ['Strawberries', 'Tart Crust', 'Cream', 'Sugar'],
    description: 'A sweet and tangy strawberry tart with a buttery crust.'
  },
];

export default function Home() {
  const { recipes } = useContext(RecipesContext);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-green-600">Home</h2>      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dummyRecipes.concat(recipes).map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} showDeleteButton={false} />
        ))}
      </div>
    </div>
  );
}

