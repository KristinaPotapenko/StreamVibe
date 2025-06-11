import { Route, Routes } from "react-router-dom";
import { Home } from "../react/pages/Home/Home";
import { ROUTES } from "../utils/routes";
import { MoviesAndTV } from "../react/pages/MoviesAndTV/MoviesAndTV";
import { Media } from "../react/pages/Media/Media";
import { Medias } from "../react/pages/Medias/Medias";
import { Support } from "../react/pages/Support/Support";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={ROUTES.BROWSE} element={<MoviesAndTV />} />
      <Route path={ROUTES.MOVIE_DETAILS} element={<Media />} />
      <Route path={ROUTES.MOVIES_GENRE} element={<Medias />} />
      <Route path={ROUTES.MOVIES_TOPGENRE} element={<Medias />} />
      <Route path={ROUTES.TV_DETAILS} element={<Media />} />
      <Route path={ROUTES.TV_GENRE} element={<Medias />} />
      <Route path={ROUTES.TV_TOPGENRE} element={<Medias />} />
      <Route path={ROUTES.SUPPORT} element={<Support />} />
    </Routes>
  );
};
