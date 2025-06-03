import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMustWatchTV } from "../../../../features/tv/mustWatchTV/mustWatchTVSlice";
import { Slider } from "../../../components/Slider/Slider/Slider";

export const MustWatchTV = () => {
  const dispatch = useDispatch();
  const { mustWatchTV } = useSelector(({ mustWatchTV }) => mustWatchTV);

  useEffect(() => {
    dispatch(getMustWatchTV());
  }, [dispatch]);

  return (
    <Slider title="Must - Watch Movies" list={mustWatchTV} footer="mustWatch" />
  );
};
