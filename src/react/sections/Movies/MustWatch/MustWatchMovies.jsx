import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
      title="Must - Watch Movies"
      list={mustWatchMovies}
      footer="mustWatch"
    />
  );
};
