import React from 'react';
import { NavLink } from 'react-router-dom';
//import logo from '../assets/logo.png'; // Add your logo image here
import '../styles/MainNavigation.css';

export default function MainNavigation() {
  return (
    <nav className="nav-bar flex justify-between items-center bg-white p-4 shadow-md border-b">
      <div className="flex items-center">
        
        <h1 className="text-2xl font-bold">Foodexconsole.log('MainNavigation component rendered');</h1>
      </div>
      <ul className="flex space-x-4">
        <li>
          <NavLink to="/" exact className={({ isActive }) => isActive ? "px-4 py-2 bg-green-300 rounded-xl" : "px-4 py-2 bg-green-200 rounded-xl"}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/my-recipes" className={({ isActive }) => isActive ? "px-4 py-2 bg-green-300 rounded-xl" : "px-4 py-2 bg-green-200 rounded-xl"}>My Recipes</NavLink>
        </li>
        <li>
          <NavLink to="/favorites" className={({ isActive }) => isActive ? "px-4 py-2 bg-green-300 rounded-xl" : "px-4 py-2 bg-green-200 rounded-xl"}>Favorites</NavLink>
        </li>
        <li>
          <NavLink to="/share-recipe" className={({ isActive }) => isActive ? "px-4 py-2 bg-green-300 rounded-xl" : "px-4 py-2 bg-green-200 rounded-xl"}>Share Recipe</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={({ isActive }) => isActive ? "px-4 py-2 bg-green-300 rounded-xl" : "px-4 py-2 bg-green-200 rounded-xl"}>Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}