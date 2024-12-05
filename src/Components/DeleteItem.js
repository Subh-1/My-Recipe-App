export const deleteItem = (id, recipes, setRecipes) => {

    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);

    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));

    setRecipes(updatedRecipes);
  };
  