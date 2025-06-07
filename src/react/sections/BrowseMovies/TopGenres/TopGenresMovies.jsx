import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ROUTES } from "../../../../utils/routes";
import { genresMoviesImage } from "../../Categories/genresMoviesImage";
import { getGenresMovies } from "../../../../features/movies/genresMovies/genresMoviesSlice";
import { Slider } from "../../../components/Slider/Slider/Slider";

export const TopGenresMovies = () => {
  const dispatch = useDispatch();
  const { genresMovies } = useSelector(({ genresMovies }) => genresMovies);

  useEffect(() => {
    dispatch(getGenresMovies());
  }, [dispatch]);

  return (
    <Slider
      route={ROUTES.MOVIES_TOPGENRE}
      title="Popular Top 10 In Genres"
      list={genresMovies}
      image={genresMoviesImage}
      footer="topGenres"
    />
  );
};
