import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ROUTES } from "../../../../utils/routes";
import { getMustWatchTV } from "../../../../features/tv/mustWatchTV/mustWatchTVSlice";
import { Slider } from "../../../components/Slider/Slider/Slider";

export const MustWatchTV = () => {
  const dispatch = useDispatch();
  const { mustWatchTV } = useSelector(({ mustWatchTV }) => mustWatchTV);

  useEffect(() => {
    dispatch(getMustWatchTV());
  }, [dispatch]);

  return (
    <Slider
      id="tvMustWatch"
      route={ROUTES.TV_DETAILS}
      routeMore={ROUTES.TV_POPULAR}
      title="Must - Watch TV"
      list={mustWatchTV}
      footer="mustWatch"
    />
  );
};
