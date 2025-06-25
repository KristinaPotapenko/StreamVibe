import { useState } from "react";
import { useSelector } from "react-redux";
import { ROUTES } from "../../../../utils/routes";
import { getRouteWithId } from "../../../../scripts/helpers/getRouteWithId";
import { scrollToTop } from "../../../../scripts/helpers/scrollToTop";
import { SliderButton } from "../../../components/Slider/SliderButton/SliderButton";
import styles from "./Pagination.module.scss";

export const Pagination = ({ activePage, setActivePage }) => {
  const { totalPages: totalTrendingMoviesPages } = useSelector(
    (state) => state.trendingMovies
  );
  const { totalPages: totalNewRealeasesMoviesPages } = useSelector(
    (state) => state.newRealeasesMovies
  );
  const { totalPages: totalMustWatchMoviesPages } = useSelector(
    (state) => state.mustWatchMovies
  );
  const { totalPages: totalTrendingNowTVPages } = useSelector(
    (state) => state.trendingNowTV
  );
  const { totalPages: totalNewRealeasesTVPages } = useSelector(
    (state) => state.newRealeasesTV
  );
  const { totalPages: totalMustWatchTVPages } = useSelector(
    (state) => state.mustWatchTV
  );
  const totalMoviesPage = useSelector((state) => state.media.totalMoviesPages);
  const totalTvsPage = useSelector((state) => state.media.totalTvsPages);

  const totalFavoritesMoviesPage = useSelector(
    ({ favoritesMovies }) => favoritesMovies.pagesCount
  );
  const totalWatchlistMoviesPage = useSelector(
    ({ watchlistMovies }) => watchlistMovies.pagesCount
  );
  const totalFavoritesTVPage = useSelector(
    ({ favoritesTV }) => favoritesTV.pagesCount
  );
  const totalWatchlistTVPage = useSelector(
    ({ watchlistTV }) => watchlistTV.pagesCount
  );

  const searchMediaPage = useSelector(
    ({ searchMedia }) => searchMedia.totalPages
  );

  const [startPage, setStartPage] = useState(1);

  const pageMap = {
    [getRouteWithId(ROUTES.MOVIES_GENRE, "")]: totalMoviesPage,
    [getRouteWithId(ROUTES.MOVIES_TOPGENRE, "")]: totalMoviesPage,
    [ROUTES.MOVIES_TRENDING]: totalTrendingMoviesPages,
    [ROUTES.MOVIES_UPCOMING]: totalNewRealeasesMoviesPages,
    [ROUTES.MOVIES_POPULAR]: totalMustWatchMoviesPages,
    [getRouteWithId(ROUTES.TV_GENRE, "")]: totalTvsPage,
    [getRouteWithId(ROUTES.TV_TOPGENRE, "")]: totalTvsPage,
    [ROUTES.TV_TRENDING]: totalTrendingNowTVPages,
    [ROUTES.TV_UPCOMING]: totalNewRealeasesTVPages,
    [ROUTES.TV_POPULAR]: totalMustWatchTVPages,
    [ROUTES.SEARCH]: searchMediaPage,
    [ROUTES.MOVIES_FAVORITE]: totalFavoritesMoviesPage,
    [ROUTES.MOVIES_WATCHLIST]: totalWatchlistMoviesPage,
    [ROUTES.TV_FAVORITE]: totalFavoritesTVPage,
    [ROUTES.TV_WATCHLIST]: totalWatchlistTVPage,
  };

  const matchedPage = Object.keys(pageMap).find((route) =>
    location.pathname.includes(route)
  );

  const pagesVisible = Array.from(
    { length: Math.min(pageMap[matchedPage], 10) },
    (_, i) => startPage + i
  );

  if (startPage + 10 < pageMap[matchedPage]) pagesVisible.push("...");
  if (startPage + 10 < pageMap[matchedPage])
    pagesVisible.push(pageMap[matchedPage]);

  const handleSetActivePage = ({ target }) => {
    setActivePage(Number(target.textContent));
  };

  const handleNextPages = () => {
    setStartPage((prev) => {
      if (prev + 10 > pageMap[matchedPage]) return prev;
      return prev + 10;
    });
  };

  const handlePrevPages = () => {
    setStartPage((prev) => {
      if (prev - 10 < 0) return prev;
      return prev - 10;
    });
  };

  return (
    <div className={styles.pagination}>
      <SliderButton onClick={handlePrevPages} isGray={true} />
      <div className={styles.list}>
        {pagesVisible.map((item, index) => {
          if (Number(item))
            return (
              <button
                key={index}
                className={`${styles.item} ${
                  activePage === item ? styles.active : ""
                }`}
                onClick={(e) => {
                  handleSetActivePage(e);
                  scrollToTop();
                }}
              >
                {item}
              </button>
            );

          return (
            <p key={index} className={styles.dots}>
              {item}
            </p>
          );
        })}
      </div>
      <SliderButton onClick={handleNextPages} isRight={true} isGray={true} />
    </div>
  );
};
