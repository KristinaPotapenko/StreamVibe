import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFavoritesMovies } from "../../../features/movies/favoritesMovies/favoritesMoviesSlice";
import { ROUTES } from "../../../utils/routes";
import { Slider } from "../../components/Slider/Slider/Slider";

export const FavoritesMovies = () => {
  const dispatch = useDispatch();
  const { favoritesMovies, pagesCount } = useSelector(
    ({ favoritesMovies }) => favoritesMovies
  );

  useEffect(() => {
    dispatch(getFavoritesMovies(1));
  }, []);

  const isMediaLoaded =
    Array.isArray(favoritesMovies) && favoritesMovies.length > 0;

  if (!isMediaLoaded) return;

  return (
    <section className="section container">
      <Slider
        route={ROUTES.MOVIE_DETAILS}
        routeMore={ROUTES.MOVIES_FAVORITE}
        title="Your Favorite Movies"
        list={favoritesMovies}
        footer="mustWatch"
        shouldShowMoreCard={Number(pagesCount) > 1}
      />
    </section>
  );
};
