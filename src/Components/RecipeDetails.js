import React from "react";
import { useLocation } from "react-router-dom";

const RecipeDetails = () => {
  const { state } = useLocation(); 
  const { recipe } = state || {};

  if (!recipe) {
    return <p>Recipe not found!.</p>;
  }

  return (
    <div>
      <h2>Recipe Details</h2>
      <h3>{recipe["Recipe Name"]}</h3>
      <p>
        <strong>Cuisine:</strong> {recipe["Cuisine Type"]}
      </p>
      <p>
        <strong>Ingredients:</strong>
      </p>
      <ul>
        {recipe.Ingredients.map((ingredient, idx) => (
          <li key={idx}>{ingredient}</li>
        ))}
      </ul>
      <p>
        <strong>Cooking Instructions:</strong>
      </p>
      <ol>
        {recipe["Cooking Instructions"].map((instruction, idx) => (
          <li key={idx}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetails;
