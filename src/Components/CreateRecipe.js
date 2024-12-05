import React, { useState } from "react";
import "./styles/CreateRecipe.css"; 
import { useNavigate } from "react-router-dom";

const CreateRecipe = () => {
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [cookingInstructions, setCookingInstructions] = useState("");
  const [cuisineType, setCuisineType] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      id: Date.now(),  
      recipeName,
      ingredients,
      cookingInstructions,
      cuisineType,
    };


    const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    storedRecipes.push(newRecipe);
    localStorage.setItem("recipes", JSON.stringify(storedRecipes));

    navigate("/home");
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Create Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder="Recipe Name"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
          required
        />
        <textarea
          className="textarea"
          placeholder="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />
        <textarea
          className="textarea"
          placeholder="Cooking Instructions"
          value={cookingInstructions}
          onChange={(e) => setCookingInstructions(e.target.value)}
          required
        />
        <input
          type="text"
          className="input"
          placeholder="Cuisine Type"
          value={cuisineType}
          onChange={(e) => setCuisineType(e.target.value)}
          required
        />
        <button type="submit" className="button">Submit Recipe</button>
      </form>
      <a href="/home" className="back-link">Back to Home</a>
    </div>
  );
};

export default CreateRecipe;
