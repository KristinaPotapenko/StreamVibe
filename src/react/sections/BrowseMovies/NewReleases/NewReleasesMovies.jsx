import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ROUTES } from "../../../../utils/routes";
import { getNewRealeasesMovies } from "../../../../features/movies/newReleasesMovies/newReleasesMoviesSlice";
import { Slider } from "../../../components/Slider/Slider/Slider";

export const NewReleasesMovies = () => {
  const dispatch = useDispatch();
  const { newRealeasesMovies } = useSelector(
    ({ newRealeasesMovies }) => newRealeasesMovies
  );

  useEffect(() => {
    dispatch(getNewRealeasesMovies());
  }, [dispatch]);
  return (
    <Slider
      route={ROUTES.MOVIE_DETAILS}
      routeMore={ROUTES.MOVIES_UPCOMING}
      title="New Releases"
      list={newRealeasesMovies}
      footer="releases"
    />
  );
};
