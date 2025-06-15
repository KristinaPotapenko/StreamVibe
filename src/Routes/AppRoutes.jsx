import { Route, Routes } from "react-router-dom";
import { Home } from "../react/pages/Home/Home";
import { ROUTES } from "../utils/routes";
import { MoviesAndTV } from "../react/pages/MoviesAndTV/MoviesAndTV";
import { Media } from "../react/pages/Media/Media";
import { Medias } from "../react/pages/Medias/Medias";
import { Support } from "../react/pages/Support/Support";
import { Subscription } from "../react/pages/Subscription/Subscription";
import { Search } from "../react/pages/Search/Search";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={ROUTES.BROWSE} element={<MoviesAndTV />} />
      <Route path={ROUTES.MOVIE_DETAILS} element={<Media />} />
      <Route
        path={ROUTES.MOVIES_GENRE}
        element={<Medias isFirstSection={true} />}
      />
      <Route
        path={ROUTES.MOVIES_TOPGENRE}
        element={<Medias isFirstSection={true} />}
      />
      <Route
        path={ROUTES.MOVIES_TRENDING}
        element={<Medias isFirstSection={true} />}
      />
      <Route
        path={ROUTES.MOVIES_UPCOMING}
        element={<Medias isFirstSection={true} />}
      />
      <Route
        path={ROUTES.MOVIES_POPULAR}
        element={<Medias isFirstSection={true} />}
      />
      <Route path={ROUTES.TV_DETAILS} element={<Media />} />
      <Route
        path={ROUTES.TV_GENRE}
        element={<Medias isFirstSection={true} />}
      />
      <Route
        path={ROUTES.TV_TOPGENRE}
        element={<Medias isFirstSection={true} />}
      />
      <Route
        path={ROUTES.TV_TRENDING}
        element={<Medias isFirstSection={true} />}
      />
      <Route
        path={ROUTES.TV_UPCOMING}
        element={<Medias isFirstSection={true} />}
      />
      <Route
        path={ROUTES.TV_POPULAR}
        element={<Medias isFirstSection={true} />}
      />
      <Route path={ROUTES.SUPPORT} element={<Support />} />
      <Route path={ROUTES.SUBSCRIPTIONS} element={<Subscription />} />
      <Route path={ROUTES.SEARCH} element={<Search />} />
    </Routes>
  );
};
