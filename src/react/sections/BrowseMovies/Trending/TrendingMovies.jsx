import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ROUTES } from "../../../../utils/routes";
import { getTrendingNowMovies } from "../../../../features/movies/trendingNowMovies/trendingNowMoviesSlice";
import { Slider } from "../../../components/Slider/Slider/Slider";

export const TrendingMovies = () => {
  const dispatch = useDispatch();
  const { trendingMovies } = useSelector(
    ({ trendingMovies }) => trendingMovies
  );

  useEffect(() => {
    dispatch(getTrendingNowMovies());
  }, [dispatch]);

  return (
    <Slider
      route={ROUTES.MOVIE_DETAILS}
      routeMore={ROUTES.MOVIES_TRENDING}
      title="Trending Now"
      list={trendingMovies}
      footer="trending"
    />
  );
};
