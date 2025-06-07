import { configureStore } from "@reduxjs/toolkit";
import genresMoviesReducer from "./movies/genresMovies/genresMoviesSlice";
import topMoviesReducer from "./movies/topRatedMovies/topMoviesSlice";
import trendingNowReducer from "./movies/trendingNowMovies/trendingNowMoviesSlice";
import newRealeasesMoviesReducer from "./movies/newReleasesMovies/newReleasesMoviesSlice";
import mustWatchMoviesReducer from "./movies/mustWatchMovies/mustWatchMoviesSlice";
import genresTVReducer from "./tv/genresTV/genresTVSlice";
import trendingNowTVReducer from "./tv/trendingNowTV/trendingNowTVSlice";
import newRealeasesTVReducer from "./tv/newReleasesTV/newReleasesTVSlice";
import mustWatchTVReducer from "./tv/mustWatchTV/mustWatchTVSlice";
import mediaReducer from "./media/mediaSlice";

export const store = configureStore({
  reducer: {
    genresMovies: genresMoviesReducer,
    topMovies: topMoviesReducer,
    trendingMovies: trendingNowReducer,
    newRealeasesMovies: newRealeasesMoviesReducer,
    mustWatchMovies: mustWatchMoviesReducer,
    genresTV: genresTVReducer,
    trendingNowTV: trendingNowTVReducer,
    newRealeasesTV: newRealeasesTVReducer,
    mustWatchTV: mustWatchTVReducer,
    media: mediaReducer,
  },
});
