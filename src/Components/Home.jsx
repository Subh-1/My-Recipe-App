import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ListRecipe from "./ListRecipe";
import SaveRecipes from "./SaveRecipes"

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    const storedRecipes = localStorage.getItem("recipes");
    if (storedRecipes) {
      setRecipes(JSON.parse(storedRecipes)); 
    }
  }, []);
  const [yourRecipe, setYourRecipe] = useState(() => {
    if (currentUser) {
      const getYourRecipe = localStorage.getItem(`recipes_${currentUser.email}`);
      return getYourRecipe ? JSON.parse(getYourRecipe) : [];
    }
    return [];
  })

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <SaveRecipes/>
      <ListRecipe recipes={recipes} setRecipes={setRecipes} searchQuery={searchQuery} yourRecipe={yourRecipe} setYourRecipe={setYourRecipe}/> {/* Pass recipes as a prop */}
    </div>
  );
};

export default Home;
