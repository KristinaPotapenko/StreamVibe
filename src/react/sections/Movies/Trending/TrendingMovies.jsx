import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Slider } from "../../../components/Slider/Slider/Slider";
import { getTrendingNowMovies } from "../../../../features/movies/trendingNowMovies/trendingNowMoviesSlice";

export const TrendingMovies = () => {
  const dispatch = useDispatch();
  const { trendingMovies } = useSelector(
    ({ trendingMovies }) => trendingMovies
  );

  useEffect(() => {
    dispatch(getTrendingNowMovies());
  }, [dispatch]);

  return (
    <Slider title="Trending Now" list={trendingMovies} footer="trending" />
  );
};
