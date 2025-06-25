import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWatchlistMovies } from "../../../features/movies/watchlistMovies/watchlistMoviesSlice";
import { ROUTES } from "../../../utils/routes";
import { Slider } from "../../components/Slider/Slider/Slider";

export const WatchlistMovies = () => {
  const dispatch = useDispatch();
  const { watchlistMovies, pagesCount } = useSelector(
    ({ watchlistMovies }) => watchlistMovies
  );

  useEffect(() => {
    dispatch(getWatchlistMovies(1));
  }, []);

  const isMediaLoaded =
    Array.isArray(watchlistMovies) && watchlistMovies.length > 0;

  if (!isMediaLoaded) return;

  return (
    <section className="section container">
      <Slider
        route={ROUTES.MOVIE_DETAILS}
        routeMore={ROUTES.MOVIES_WATCHLIST}
        title="Your Movie Watchlist"
        list={watchlistMovies}
        footer="mustWatch"
        shouldShowMoreCard={Number(pagesCount) > 1}
      />
    </section>
  );
};
