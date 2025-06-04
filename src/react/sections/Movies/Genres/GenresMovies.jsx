import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Slider } from "../../../components/Slider/Slider/Slider";
import { getGenresMovies } from "../../../../features/movies/genresMovies/genresMoviesSlice";
import { genresMoviesImage } from "../../Categories/genresMoviesImage";

export const GenresMovies = () => {
  const dispatch = useDispatch();
  const { genresMovies } = useSelector(({ genresMovies }) => genresMovies);

  useEffect(() => {
    dispatch(getGenresMovies());
  }, [dispatch]);

  return (
    <Slider
      type="movie"
      title="Our Genres"
      list={genresMovies}
      image={genresMoviesImage}
      footer="genres"
    />
  );
};
