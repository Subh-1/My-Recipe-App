import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteItem } from "./DeleteItem";

import "./styles/ListRecipe.css";

const ListRecipe = ({ recipes, setRecipes, searchQuery,yourRecipe,setYourRecipe }) => {
  const [favorites, setFavorites] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState("All");

  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleAddToFavorites = (recipe) => {
    if (!currentUser) {
      alert("You must be logged in to add to favorites.");
      return;
    }

    const storedFavorites = JSON.parse(localStorage.getItem(`favorites_${currentUser.email}`)) || [];

    if (!storedFavorites.some((item) => item.id === recipe.id)) {
      const updatedFavorites = [...storedFavorites, recipe];
      localStorage.setItem(`favorites_${currentUser.email}`, JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
    }
  };

  const handleCardClick = (recipe, index) => {
    navigate(`/recipe-details/${index}`, { state: { recipe } });
  };

  const handleDelete = (id) => {
    deleteItem(id, recipes, setRecipes);
  };
console.log("here",yourRecipe)
  // Filter recipes by search query and selected cuisine type
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe["recipeName"]
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCuisine =
      selectedCuisine === "All" || recipe["cuisineType"] === selectedCuisine;
    return matchesSearch && matchesCuisine;
  });
  

  // Get all unique cuisine types
  const cuisineOptions = ["All", ...new Set(recipes.map((recipe) => recipe["cuisineType"]))];

  return (
    <div>
      <h2>Recipe List</h2>

      {/* Filter by Cuisine Type */}
      <div className="filter-container">
        <label htmlFor="cuisine-filter">Filter by Cuisine:</label>
        <select
          id="cuisine-filter"
          value={selectedCuisine}
          onChange={(e) => setSelectedCuisine(e.target.value)}
        >
          {cuisineOptions.map((cuisine, index) => (
            <option key={index} value={cuisine}>
              {cuisine}
            </option>
          ))}
        </select>
      </div>

      <div className="recipe-grid">
        {filteredRecipes.map((recipe, index) => (
          <div
            key={index}
            className="recipe-card"
            onClick={() => handleCardClick(recipe, index)}
          >
            <div className="recipe-field">
              <strong>Recipe Name:</strong> {recipe["recipeName"]}
            </div>
            <div className="recipe-field">
              <strong>Cuisine:</strong> {recipe["cuisineType"]}
            </div>
            <button
              className="favorite-button"
              onClick={(e) => {
                e.stopPropagation();
                handleAddToFavorites(recipe);
              }}
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
      <h2>Your Added Recipes</h2>
      <div className="filter-container">
        <label htmlFor="cuisine-filter">Filter by Cuisine:</label>
        <select
          id="cuisine-filter"
          value={selectedCuisine}
          onChange={(e) => setSelectedCuisine(e.target.value)}
        >
          {cuisineOptions.map((cuisine, index) => (
            <option key={index} value={cuisine}>
              {cuisine}
            </option>
          ))}
        </select>
      </div>

      <div className="recipe-grid">
      {Array.isArray(yourRecipe) && yourRecipe.length > 0 ? (
  yourRecipe.map((recipe, index) => (
    <div
      key={index}
      className="recipe-card"
      onClick={() => handleCardClick(recipe, index)}
    >
      <div className="recipe-field">
        <strong>Recipe Name:</strong> {recipe["recipeName"]}
      </div>
      <div className="recipe-field">
        <strong>Cuisine:</strong> {recipe["cuisineType"]}
      </div>
      <button
        className="favorite-button"
        onClick={(e) => {
          e.stopPropagation();
          handleAddToFavorites(recipe);
        }}
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
  ))
) : (
  <p>No recipes available. Please add some!</p>
)}

      </div>
    </div>
  );
};

export default ListRecipe;
