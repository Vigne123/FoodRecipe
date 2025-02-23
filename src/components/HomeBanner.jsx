import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/HomeBanner.css";

export default function HomeBanner() {
  const navigate = useNavigate();

  const handleShareRecipeClick = () => {
    navigate('/share-recipe');
  };

  return (
    <section className="home-banner">
      <h1>Food Recipe</h1>
      <p>
        It is a long established fact that a reader will be distracted by
        readable content.
      </p>
      <button onClick={handleShareRecipeClick}>Share your recipe</button>
    </section>
  );
}
