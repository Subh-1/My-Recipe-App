import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ListRecipe from "./ListRecipe";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  // Load recipes from localStorage when the component mounts
  useEffect(() => {
    const storedRecipes = localStorage.getItem("recipes");
    if (storedRecipes) {
      setRecipes(JSON.parse(storedRecipes)); // Parse and set the recipes from localStorage
    }
  }, []);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <ListRecipe recipes={recipes} setRecipes={setRecipes} searchQuery={searchQuery}/> {/* Pass recipes as a prop */}
    </div>
  );
};

export default Home;
