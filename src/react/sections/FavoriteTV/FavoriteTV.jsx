import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavoritesTV } from "../../../features/tv/favoritesTV/favoritesTVSlice";
import { ROUTES } from "../../../utils/routes";
import { Slider } from "../../components/Slider/Slider/Slider";

export const FavoriteTV = () => {
  const dispatch = useDispatch();
  const { favoritesTV, pagesCount } = useSelector(
    ({ favoritesTV }) => favoritesTV
  );

  useEffect(() => {
    dispatch(getFavoritesTV(1));
  }, []);

  const isMediaLoaded = Array.isArray(favoritesTV) && favoritesTV.length > 0;

  if (!isMediaLoaded) return;
  return (
    <section className="section container">
      <Slider
        route={ROUTES.TV_DETAILS}
        routeMore={ROUTES.TV_FAVORITE}
        title="Your Favorite TV"
        list={favoritesTV}
        footer="mustWatch"
        shouldShowMoreCard={Number(pagesCount) > 1}
      />
    </section>
  );
};
