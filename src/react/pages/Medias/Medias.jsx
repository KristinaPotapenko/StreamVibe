import { useEffect, useState } from "react";
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

import { Pagination } from "./Pagination/Pagination";
import { MediaCard } from "../../components/card/MediaCard/MediaCard";
import styles from "./Medias.module.scss";

export const Medias = ({ isFirstSection = false }) => {
  const dispatch = useDispatch();

  const { trendingMovies } = useSelector((state) => state.trendingMovies);
  const { newRealeasesMovies } = useSelector(
    (state) => state.newRealeasesMovies
  );
  const { mustWatchMovies } = useSelector((state) => state.mustWatchMovies);
  const { trendingNowTV } = useSelector((state) => state.trendingNowTV);
  const { newRealeasesTV } = useSelector((state) => state.newRealeasesTV);
  const { mustWatchTV } = useSelector((state) => state.mustWatchTV);

  const movies = useSelector((state) => state.media.movies);
  const tvs = useSelector((state) => state.media.tvs);

  const [activePage, setActivePage] = useState(1);

  const location = useLocation();
  const { mediaType, mediaId, genreId, isTopGenre } = useMediaQueryParams();

  const routeMap = {
    [ROUTES.MOVIES_TRENDING]: trendingMovies,
    [ROUTES.MOVIES_UPCOMING]: newRealeasesMovies,
    [ROUTES.MOVIES_POPULAR]: mustWatchMovies,
    [ROUTES.TV_TRENDING]: trendingNowTV,
    [ROUTES.TV_UPCOMING]: newRealeasesTV,
    [ROUTES.TV_POPULAR]: mustWatchTV,
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
    [ROUTES.MOVIES_TRENDING]: () => dispatch(getTrendingNowMovies(activePage)),
    [ROUTES.MOVIES_UPCOMING]: () => dispatch(getNewRealeasesMovies(activePage)),
    [ROUTES.MOVIES_POPULAR]: () => dispatch(getMustWatchMovies(activePage)),
    [ROUTES.TV_TRENDING]: () => dispatch(getTrendingNowTV(activePage)),
    [ROUTES.TV_UPCOMING]: () => dispatch(getNewRealeasesTV(activePage)),
    [ROUTES.TV_POPULAR]: () => dispatch(getMustWatchTV(activePage)),
  };

  useEffect(() => {
    if (!matchedRoute) {
      dispatch(
        fetchMediaData({
          page: activePage,
          mediaType,
          mediaId,
          genreId,
          isTopGenre,
        })
      );
      return;
    }

    routeDispatchMap[matchedRoute]?.();
  }, [
    dispatch,
    matchedRoute,
    mediaType,
    mediaId,
    genreId,
    isTopGenre,
    activePage,
  ]);

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
      <Pagination activePage={activePage} setActivePage={setActivePage} />
    </section>
  );
};
