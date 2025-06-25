import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWatchlistTV } from "../../../features/tv/watchlistTV/watchlistTVSlice";
import { ROUTES } from "../../../utils/routes";
import { Slider } from "../../components/Slider/Slider/Slider";

export const WatchlistTV = () => {
  const dispatch = useDispatch();
  const { watchlistTV, pagesCount } = useSelector(
    ({ watchlistTV }) => watchlistTV
  );

  useEffect(() => {
    dispatch(getWatchlistTV(1));
  }, []);

  const isMediaLoaded = Array.isArray(watchlistTV) && watchlistTV.length > 0;

  if (!isMediaLoaded) return;

  return (
    <section className="section container">
      <Slider
        route={ROUTES.TV_DETAILS}
        routeMore={ROUTES.TV_WATCHLIST}
        title="Your TV Watchlist"
        list={watchlistTV}
        footer="mustWatch"
        shouldShowMoreCard={Number(pagesCount) > 1}
      />
    </section>
  );
};
