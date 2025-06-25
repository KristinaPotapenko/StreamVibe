import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ROUTES } from "../../../../utils/routes";
import { getMustWatchMovies } from "../../../../features/movies/mustWatchMovies/mustWatchMoviesSlice";
import { Slider } from "../../../components/Slider/Slider/Slider";

export const MustWatchMovies = () => {
  const dispatch = useDispatch();
  const { mustWatchMovies } = useSelector(
    ({ mustWatchMovies }) => mustWatchMovies
  );

  useEffect(() => {
    dispatch(getMustWatchMovies());
  }, [dispatch]);
  return (
    <Slider
      route={ROUTES.MOVIE_DETAILS}
      routeMore={ROUTES.MOVIES_POPULAR}
      title="Must - Watch Movies"
      list={mustWatchMovies}
      footer="mustWatch"
      shouldShowMoreCard={true}
    />
  );
};
