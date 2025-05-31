import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categories/categoriesSlice";
import topMoviesReducer from "./topRatedMovies/topMoviesReducerSlice";

export const store = configureStore({
  reducer: {
    categoriesList: categoriesReducer,
    topMovies: topMoviesReducer,
  },
});
