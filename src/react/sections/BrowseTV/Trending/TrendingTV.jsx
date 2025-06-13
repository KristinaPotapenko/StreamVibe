import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ROUTES } from "../../../../utils/routes";
import { getTrendingNowTV } from "../../../../features/tv/trendingNowTV/trendingNowTVSlice";
import { Slider } from "../../../components/Slider/Slider/Slider";

export const TrendingTV = () => {
  const dispatch = useDispatch();
  const { trendingNowTV } = useSelector(({ trendingNowTV }) => trendingNowTV);

  useEffect(() => {
    dispatch(getTrendingNowTV());
  }, [dispatch]);

  return (
    <Slider
      id="tvTrending"
      route={ROUTES.TV_DETAILS}
      routeMore={ROUTES.TV_TRENDING}
      title="Trending Shows Now"
      list={trendingNowTV}
      footer="trending"
    />
  );
};
