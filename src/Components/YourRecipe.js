import React, { useEffect, useState } from "react";

const YourRecipe = () => {
  const [favorites, setFavorites] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
console.log(currentUser);
  useEffect(() => {
    if (currentUser) {
      const storedFavorites = JSON.parse(localStorage.getItem(`favorites_${currentUser.email}`)) || [];
      setFavorites(storedFavorites);
    }
  }, [currentUser]);

  return (
    <div>
      <h2>Your Favorite Recipes</h2>
      <div className="favorite-recipes">
        {favorites.length > 0 ? (
          favorites.map((recipe, index) => (
            <div key={index} className="recipe-card">
              <div className="recipe-field">
                <strong>Recipe Name:</strong> {recipe.recipeName}
              </div>
              <div className="recipe-field">
                <strong>Cuisine:</strong> {recipe.cuisineType}
              </div>
            </div>
          ))
        ) : (
          <p>No favorite recipes yet!</p>
        )}
      </div>
    </div>
  );
};

export default YourRecipe;
