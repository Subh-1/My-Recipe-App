// // src/redux/favoritesSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// const favoritesSlice = createSlice({
//   name: "favorites",
//   initialState: {
//     favoriteRecipes: [], 
//   },
//   reducers: {
//     addFavorite: (state, action) => {
//       const existingRecipe = state.favoriteRecipes.find(
//         (recipe) => recipe.id === action.payload.id
//       );
//       if (!existingRecipe) {
//         state.favoriteRecipes.push(action.payload);
//       }
//     },
//     removeFavorite: (state, action) => {
//       state.favoriteRecipes = state.favoriteRecipes.filter(
//         (recipe) => recipe.id !== action.payload.id
//       );
//     },
//     updateFavorite: (state, action) => {
//       const recipeIndex = state.favoriteRecipes.findIndex(
//         (recipe) => recipe.id === action.payload.id
//       );
//       if (recipeIndex !== -1) {
//         state.favoriteRecipes[recipeIndex] = action.payload;
//       }
//     },
//     clearFavorites: (state) => {
//       state.favoriteRecipes = [];
//     },
//   },
// });

// export const { addFavorite, removeFavorite, updateFavorite, clearFavorites } = favoritesSlice.actions;

// export default favoritesSlice.reducer;
