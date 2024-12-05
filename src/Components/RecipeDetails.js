import React from "react";
import { useLocation } from "react-router-dom";
import "./styles/RecipeDetail.css";

const RecipeDetails = () => {
  const { state } = useLocation();
  const { recipe } = state || {};

  if (!recipe) {
    return <p className="error-message">Recipe not found!</p>;
  }

  return (
    <div className="recipe-details">
      <h2 className="recipe-title">Recipe Details</h2>
      <div className="recipe-header">
        <h3 className="recipe-name">{recipe["recipeName"]}</h3>
        <p className="recipe-cuisine">
          <strong>Cuisine:</strong> {recipe["cuisineType"]}
        </p>
      </div>
      <div className="recipe-section">
        <h4>Ingredients</h4>
        <ul className="ingredient-list">
          {Array.isArray(recipe.ingredients) ? (
            recipe.ingredients.map((ingredient, idx) => (
              <li key={idx}>{ingredient}</li>
            ))
          ) : (
            <li>{recipe.ingredients}</li>
          )}
        </ul>
        <h3>Cooking Instructions:</h3>
        <p>{recipe.cookingInstructions}</p>
      </div>
      <div className="recipe-section"></div>
    </div>
  );
};

export default RecipeDetails;
