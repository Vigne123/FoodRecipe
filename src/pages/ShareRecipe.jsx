import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecipesContext } from '../context/RecipesContext';

export default function ShareRecipe() {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [time, setTime] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [description, setDescription] = useState('');
  const { addRecipe } = useContext(RecipesContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = { name, image, time, description, ingredients };
    addRecipe(newRecipe);
    console.log('Recipe shared', newRecipe);
    navigate('/'); // Navigate back to the Home page
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#cd84f1]">Share Your Recipe</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Recipe Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-[#cd84f1]"
            placeholder="Enter recipe name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-[#cd84f1]"
            placeholder="Enter image URL"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Time (in minutes)</label>
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-[#cd84f1]"
            placeholder="Enter cooking time"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Ingredients</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-[#cd84f1]"
            placeholder="Enter ingredients list"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-[#cd84f1]"
            placeholder="Enter cooking process"
            required
          />
        </div>
        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg font-bold hover:bg-green-600 transition duration-300">Share</button>
      </form>
    </div>
  );
}