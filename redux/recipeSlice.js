import { createSlice } from "@reduxjs/toolkit";

export const recipesSlice = createSlice({
  name: "recipes",
  initialState: {},
  reducers: {
    addRecipes: (state, action) => {
      state.recipeList = [...action.payload];
    },
    searchResults: (state, action) => {
      state.searchResults = [...action.payload];
    },
    fetchFeaturedRecipe: (state, action) => {
      state.featureRecipe = { ...action.payload };
    },
  },
});
