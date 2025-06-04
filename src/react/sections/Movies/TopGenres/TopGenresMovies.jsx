import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenresMovies } from "../../../../features/movies/genresMovies/genresMoviesSlice";
import { Slider } from "../../../components/Slider/Slider/Slider";
import { genresMoviesImage } from "../../Categories/genresMoviesImage";

export const TopGenresMovies = () => {
  const dispatch = useDispatch();
  const { genresMovies } = useSelector(({ genresMovies }) => genresMovies);

  useEffect(() => {
    dispatch(getGenresMovies());
  }, [dispatch]);

  return (
    <Slider
      type="movie"
      title="Popular Top 10 In Genres"
      list={genresMovies}
      image={genresMoviesImage}
      footer="topGenres"
    />
  );
};
