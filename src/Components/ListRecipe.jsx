import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteItem } from "./DeleteItem";
import "./styles/ListRecipe.css";

const ListRecipe =  ({ recipes, setRecipes, searchQuery }) => {
  const [favorites, setFavorites] = useState([]);

  const navigate = useNavigate();

  const handleAddToFavorites = (recipe) => {
    setFavorites((prevFavorites) => [...prevFavorites, recipe]);
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
      {/* <h3>Favorites:</h3>
      <ul>
        {favorites.map((favorite, idx) => (
          <li key={idx}>{favorite["Recipe Name"]}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default ListRecipe;
