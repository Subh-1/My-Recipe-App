import React, { useState } from "react";
import "./styles/CreateRecipe.css";
import { useNavigate } from "react-router-dom";

const CreateRecipe = () => {
  const [recipeName, setRecipeName] = useState("");
  const [Ingredients, setIngredients] = useState(""); // Ingredients as string
  const [cookingInstructions, setCookingInstructions] = useState("");
  const [cuisineType, setCuisineType] = useState("");
  const navigate = useNavigate();

  // Handle Submit Form
  const handleSubmit = (e) => {
    e.preventDefault();

    const ingredientArray = Ingredients.split(",").map((ingredient) => ingredient.trim());
  
    const newRecipe = {
      id: Date.now(),
      recipeName,
      Ingredients: ingredientArray,
      cookingInstructions,
      cuisineType,
    };
  
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  
   
    const storedRecipes = JSON.parse(localStorage.getItem(`recipes_${currentUser.email}`)) || [];
  

    const validStoredRecipes = Array.isArray(storedRecipes) ? storedRecipes : [];

    const updatedRecipes = [...validStoredRecipes, newRecipe];

    localStorage.setItem(`recipes_${currentUser.email}`, JSON.stringify(updatedRecipes));

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
          placeholder="Ingredients (separate with commas)"
          value={Ingredients}
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
