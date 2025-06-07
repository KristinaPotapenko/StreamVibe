import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ROUTES } from "../../../../utils/routes";
import { genresTVImage } from "../Genres/genresTVImage";
import { getGenresTV } from "../../../../features/tv/genresTV/genresTVSlice";
import { Slider } from "../../../components/Slider/Slider/Slider";

export const TopGenresTV = () => {
  const dispatch = useDispatch();
  const { genresTV } = useSelector(({ genresTV }) => genresTV);

  useEffect(() => {
    dispatch(getGenresTV());
  }, [dispatch]);

  return (
    <Slider
      route={ROUTES.TV_TOPGENRE}
      title="Popular Top 10 In Genres"
      list={genresTV}
      image={genresTVImage}
      footer="topGenres"
    />
  );
};
