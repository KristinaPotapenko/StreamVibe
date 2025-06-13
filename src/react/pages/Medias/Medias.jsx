import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ROUTES } from "../../../utils/routes";
import { useMediaQueryParams } from "../../../scripts/hook/useMediaQueryParams";
import { fetchMediaData } from "../../../features/media/mediaSlice";
import { getMustWatchMovies } from "../../../features/movies/mustWatchMovies/mustWatchMoviesSlice";
import { getTrendingNowMovies } from "../../../features/movies/trendingNowMovies/trendingNowMoviesSlice";
import { getNewRealeasesMovies } from "../../../features/movies/newReleasesMovies/newReleasesMoviesSlice";
import { getTrendingNowTV } from "../../../features/tv/trendingNowTV/trendingNowTVSlice";
import { getNewRealeasesTV } from "../../../features/tv/newReleasesTV/newReleasesTVSlice";
import { getMustWatchTV } from "../../../features/tv/mustWatchTV/mustWatchTVSlice";

import { MediaCard } from "../../components/card/MediaCard/MediaCard";
import styles from "./Medias.module.scss";

export const Medias = ({ isFirstSection = false }) => {
  const dispatch = useDispatch();
  const trendingMovies = useSelector((state) => state.trendingMovies);
  const newRealeasesMovies = useSelector((state) => state.newRealeasesMovies);
  const mustWatchMovies = useSelector((state) => state.mustWatchMovies);

  const trendingNowTV = useSelector((state) => state.trendingNowTV);
  const newRealeasesTV = useSelector((state) => state.newRealeasesTV);
  const mustWatchTV = useSelector((state) => state.mustWatchTV);

  const movies = useSelector((state) => state.media.movies);
  const tvs = useSelector((state) => state.media.tvs);

  const location = useLocation();
  const { mediaType, mediaId, genreId, isTopGenre } = useMediaQueryParams();

  const routeMap = {
    [ROUTES.MOVIES_TRENDING]: trendingMovies.trendingMovies,
    [ROUTES.MOVIES_UPCOMING]: newRealeasesMovies.newRealeasesMovies,
    [ROUTES.MOVIES_POPULAR]: mustWatchMovies.mustWatchMovies,
    [ROUTES.TV_TRENDING]: trendingNowTV.trendingNowTV,
    [ROUTES.TV_UPCOMING]: newRealeasesTV.newRealeasesTV,
    [ROUTES.TV_POPULAR]: mustWatchTV.mustWatchTV,
  };

  const matchedRoute = Object.keys(routeMap).find((route) =>
    location.pathname.includes(route)
  );

  const mediaList = matchedRoute
    ? routeMap[matchedRoute]
    : mediaType === "movies"
    ? movies
    : mediaType === "tvs"
    ? tvs
    : [];

  const routeDispatchMap = {
    [ROUTES.MOVIES_TRENDING]: () => dispatch(getTrendingNowMovies()),
    [ROUTES.MOVIES_UPCOMING]: () => dispatch(getNewRealeasesMovies()),
    [ROUTES.MOVIES_POPULAR]: () => dispatch(getMustWatchMovies()),
    [ROUTES.TV_TRENDING]: () => dispatch(getTrendingNowTV()),
    [ROUTES.TV_UPCOMING]: () => dispatch(getNewRealeasesTV()),
    [ROUTES.TV_POPULAR]: () => dispatch(getMustWatchTV()),
  };

  useEffect(() => {
    if (!matchedRoute) {
      dispatch(fetchMediaData({ mediaType, mediaId, genreId, isTopGenre }));
      return;
    }

    routeDispatchMap[matchedRoute]?.();
  }, [dispatch, matchedRoute, mediaType, mediaId, genreId, isTopGenre]);

  const isMediaLoaded = Array.isArray(mediaList) && mediaList.length > 0;
  const normalizedMediaType =
    mediaType === "movies" || mediaType === "movie" ? "movies" : "tvs";

  return (
    <section
      className={`section container ${isFirstSection ? "first-section" : ""}`}
    >
      <ul className={styles.media}>
        {isMediaLoaded &&
          mediaList.map((media) => {
            return (
              <MediaCard
                key={media.id}
                media={media}
                type={normalizedMediaType}
              />
            );
          })}
      </ul>
    </section>
  );
};
