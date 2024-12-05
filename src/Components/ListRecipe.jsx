import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteItem } from "./DeleteItem";
import "./styles/ListRecipe.css";

const ListRecipe =  ({ recipes, setRecipes, searchQuery }) => {
  const [favorites, setFavorites] = useState([]);

  const navigate = useNavigate();
  
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleAddToFavorites = (recipe) => {
    if (!currentUser) {
      alert("You must be logged in to add to favorites.");
      return;
    }

    // Get the current favorites from localStorage, or initialize an empty array
    const storedFavorites = JSON.parse(localStorage.getItem(`favorites_${currentUser.id}`)) || [];

    // If the recipe is not already in favorites, add it
    if (!storedFavorites.some((item) => item.id === recipe.id)) {
      const updatedFavorites = [...storedFavorites, recipe];
      localStorage.setItem(`favorites_${currentUser.id}`, JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
    }
  };


  const handleCardClick = (recipe, index) => {
    navigate(`/recipe-details/${index}`, { state: { recipe } });
  };

  const handleDelete = (id) => {
    deleteItem(id, recipes, setRecipes); // Call deleteItem with the recipe id
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe["recipeName"].toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Recipe List</h2>
      <div className="recipe-grid">
        {filteredRecipes.map((recipe, index) => (
          <div key={index} className="recipe-card" onClick={() => handleCardClick(recipe, index)}>
            <div className="recipe-field">
              <strong>Recipe Name:</strong> {recipe["recipeName"]}
            </div>
            <div className="recipe-field">
              <strong>Cuisine:</strong> {recipe["cuisineType"]}
            </div>
            <button
              className="favorite-button"
              onClick={(e) =>{ 
                e.stopPropagation();
                handleAddToFavorites(recipe)}}
            >
              Add to Favorite
            </button>
            <button
              className="delete-button"
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(recipe.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListRecipe;
