import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenresTV } from "../../../../features/tv/genresTV/genresTVSlice";
import { genresTVImage } from "../Genres/genresTVImage";
import { Slider } from "../../../components/Slider/Slider/Slider";

export const TopGenresTV = () => {
  const dispatch = useDispatch();
  const { genresTV } = useSelector(({ genresTV }) => genresTV);

  useEffect(() => {
    dispatch(getGenresTV());
  }, [dispatch]);

  return (
    <Slider
      type="tv"
      title="Popular Top 10 In Genres"
      list={genresTV}
      image={genresTVImage}
      footer="topGenres"
    />
  );
};
