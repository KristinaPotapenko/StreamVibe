import { configureStore } from "@reduxjs/toolkit";
import appStatusReducer from "./appStatusSlice";
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
import searchMediaReducer from "./searchMedia/searchMediaSlice";
import movieVideoReducer from "./movies/movieVideo/movieVideoSlice";
import tvSeasonVideoReducer from "./tv/tvSeasonVideo/tvSeasonVideoSlice";
import guestAuthenticationReducer from "./authentication/guestAuthenticationSlice";
import userAuthenticationReducer from "./authentication/userAuthenticationSlice";
import tvEpisodesReducer from "./tv/tvEpisodes/tvEpisodesSlice";
import reviewsReducer from "./reviews/reviewsSlice";
import favoriteReducer from "./media/favoriteSlice";
import watchlistReducer from "./media/watchlistSlice";
import favoritesMoviesReducer from "./movies/favoritesMovies/favoritesMoviesSlice";
import favoritesTVReducer from "./tv/favoritesTV/favoritesTVSlice";
import watchlistMoviesReducer from "./movies/watchlistMovies/watchlistMoviesSlice";
import watchlistTVReducer from "./tv/watchlistTV/watchlistTVSlice";

export const store = configureStore({
  reducer: {
    appStatus: appStatusReducer,
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
    searchMedia: searchMediaReducer,
    movieVideo: movieVideoReducer,
    tvSeasonVideo: tvSeasonVideoReducer,
    guestAuthentication: guestAuthenticationReducer,
    userAuthentication: userAuthenticationReducer,
    tvEpisodes: tvEpisodesReducer,
    reviews: reviewsReducer,
    favorite: favoriteReducer,
    watchlist: watchlistReducer,
    favoritesMovies: favoritesMoviesReducer,
    favoritesTV: favoritesTVReducer,
    watchlistMovies: watchlistMoviesReducer,
    watchlistTV: watchlistTVReducer,
  },
});
