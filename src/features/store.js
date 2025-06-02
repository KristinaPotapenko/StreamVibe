import { configureStore } from "@reduxjs/toolkit";
import genresMoviesReducer from "./movies/genresMovies/genresMoviesSlice";
import topMoviesReducer from "./movies/topRatedMovies/topMoviesSlice";
import trendingNowReducer from "./movies/trendingNowMovies/trendingNowMoviesSlice";
import newRealeasesMoviesReducer from "./movies/newReleasesMovies/newReleasesMoviesSlice";

export const store = configureStore({
  reducer: {
    genresMovies: genresMoviesReducer,
    topMovies: topMoviesReducer,
    trendingMovies: trendingNowReducer,
    newRealeasesMovies: newRealeasesMoviesReducer,
  },
});
