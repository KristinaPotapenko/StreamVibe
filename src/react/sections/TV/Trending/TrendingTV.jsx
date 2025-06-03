import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrendingNowTV } from "../../../../features/tv/trendingNowTV/trendingNowTVSlice";
import { Slider } from "../../../components/Slider/Slider/Slider";

export const TrendingTV = () => {
  const dispatch = useDispatch();
  const { trendingNowTV } = useSelector(({ trendingNowTV }) => trendingNowTV);

  useEffect(() => {
    dispatch(getTrendingNowTV());
  }, [dispatch]);

  return (
    <Slider title="Trending Shows Now" list={trendingNowTV} footer="trending" />
  );
};
