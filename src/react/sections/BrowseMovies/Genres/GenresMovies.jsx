import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ROUTES } from "../../../../utils/routes";
import { getGenresMovies } from "../../../../features/movies/genresMovies/genresMoviesSlice";
import { genresMoviesImage } from "../../Categories/genresMoviesImage";
import { Slider } from "../../../components/Slider/Slider/Slider";

export const GenresMovies = () => {
  const dispatch = useDispatch();
  const { genresMovies } = useSelector(({ genresMovies }) => genresMovies);

  useEffect(() => {
    dispatch(getGenresMovies());
  }, [dispatch]);

  return (
    <Slider
      route={ROUTES.MOVIES_GENRE}
      title="Our Genres"
      list={genresMovies}
      image={genresMoviesImage}
      footer="genres"
    />
  );
};
