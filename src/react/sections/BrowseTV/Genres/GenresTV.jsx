import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ROUTES } from "../../../../utils/routes";
import { getGenresTV } from "../../../../features/tv/genresTV/genresTVSlice";
import { genresTVImage } from "./genresTVImage";
import { Slider } from "../../../components/Slider/Slider/Slider";

export const GenresTV = () => {
  const dispatch = useDispatch();
  const { genresTV } = useSelector(({ genresTV }) => genresTV);

  useEffect(() => {
    dispatch(getGenresTV());
  }, [dispatch]);

  return (
    <Slider
      id="tvGenres"
      route={ROUTES.TV_GENRE}
      title="Our Genres"
      list={genresTV}
      image={genresTVImage}
      footer="genres"
    />
  );
};
