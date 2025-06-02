import { configureStore } from "@reduxjs/toolkit";
import genresMoviesReducer from "./movies/genresMovies/genresMoviesSlice";
import topMoviesReducer from "./movies/topRatedMovies/topMoviesSlice";
import trendingNowReducer from "./movies/trendingNowMovies/trendingNowMoviesSlice";

export const store = configureStore({
  reducer: {
    genresMovies: genresMoviesReducer,
    topMovies: topMoviesReducer,
    trendingMovies: trendingNowReducer,
  },
});
