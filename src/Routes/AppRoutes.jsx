import { Route, Routes } from "react-router-dom";
import { Home } from "../react/pages/Home/Home";
import { ROUTES } from "../utils/routes";
import { MoviesAndTV } from "../react/pages/MoviesAndTV/MoviesAndTV";
import { Media } from "../react/pages/Media/Media";
import { Medias } from "../react/pages/Medias/Medias";
import { Support } from "../react/pages/Support/Support";
import { Subscription } from "../react/pages/Subscription/Subscription";
import { Search } from "../react/pages/Search/Search";
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute";
import { Authentication } from "../react/pages/Authentication/Authentication";
import { TvEpisodes } from "../react/pages/TvEpisodes/TvEpisodes";
import { NotFound } from "../react/pages/NotFound/NotFound";

export const AppRoutes = () => {
  const accountType = localStorage.getItem("accountType");

  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route
        path={ROUTES.BROWSE}
        element={
          <ProtectedRoute
            element={<MoviesAndTV />}
            condition={accountType}
            redirectTo={ROUTES.HOME}
          />
        }
      />
      <Route
        path={ROUTES.MOVIE_DETAILS}
        element={
          <ProtectedRoute
            element={<Media />}
            condition={accountType}
            redirectTo={ROUTES.HOME}
          />
        }
      />
      <Route
        path={ROUTES.MOVIES_GENRE}
        element={
          <ProtectedRoute
            element={<Medias isFirstSection={true} />}
            condition={accountType}
            redirectTo={ROUTES.HOME}
          />
        }
      />
      <Route
        path={ROUTES.MOVIES_TOPGENRE}
        element={
          <ProtectedRoute
            element={<Medias isFirstSection={true} />}
            condition={accountType}
            redirectTo={ROUTES.HOME}
          />
        }
      />
      <Route
        path={ROUTES.MOVIES_TRENDING}
        element={
          <ProtectedRoute
            element={<Medias isFirstSection={true} />}
            condition={accountType}
            redirectTo={ROUTES.HOME}
          />
        }
      />
      <Route
        path={ROUTES.MOVIES_UPCOMING}
        element={
          <ProtectedRoute
            element={<Medias isFirstSection={true} />}
            condition={accountType}
            redirectTo={ROUTES.HOME}
          />
        }
      />
      <Route
        path={ROUTES.MOVIES_POPULAR}
        element={
          <ProtectedRoute
            element={<Medias isFirstSection={true} />}
            condition={accountType}
            redirectTo={ROUTES.HOME}
          />
        }
      />
      <Route
        path={ROUTES.MOVIES_FAVORITE}
        element={
          <ProtectedRoute
            element={<Medias isFirstSection={true} />}
            condition={accountType}
            redirectTo={ROUTES.HOME}
          />
        }
      />
      <Route
        path={ROUTES.MOVIES_WATCHLIST}
        element={
          <ProtectedRoute
            element={<Medias isFirstSection={true} />}
            condition={accountType}
            redirectTo={ROUTES.HOME}
          />
        }
      />
      <Route
        path={ROUTES.TV_DETAILS}
        element={
          <ProtectedRoute
            element={<Media />}
            condition={accountType}
            redirectTo={ROUTES.HOME}
          />
        }
      />
      <Route
        path={ROUTES.TV_GENRE}
        element={
          <ProtectedRoute
            element={<Medias isFirstSection={true} />}
            condition={accountType}
            redirectTo={ROUTES.HOME}
          />
        }
      />
      <Route
        path={ROUTES.TV_TOPGENRE}
        element={
          <ProtectedRoute
            element={<Medias isFirstSection={true} />}
            condition={accountType}
            redirectTo={ROUTES.HOME}
          />
        }
      />
      <Route
        path={ROUTES.TV_TRENDING}
        element={
          <ProtectedRoute
            element={<Medias isFirstSection={true} />}
            condition={accountType}
            redirectTo={ROUTES.HOME}
          />
        }
      />
      <Route
        path={ROUTES.TV_UPCOMING}
        element={
          <ProtectedRoute
            element={<Medias isFirstSection={true} />}
            condition={accountType}
            redirectTo={ROUTES.HOME}
          />
        }
      />
      <Route
        path={ROUTES.TV_POPULAR}
        element={
          <ProtectedRoute
            element={<Medias isFirstSection={true} />}
            condition={accountType}
            redirectTo={ROUTES.HOME}
          />
        }
      />
      <Route
        path={ROUTES.TV_FAVORITE}
        element={
          <ProtectedRoute
            element={<Medias isFirstSection={true} />}
            condition={accountType}
            redirectTo={ROUTES.HOME}
          />
        }
      />
      <Route
        path={ROUTES.TV_WATCHLIST}
        element={
          <ProtectedRoute
            element={<Medias isFirstSection={true} />}
            condition={accountType}
            redirectTo={ROUTES.HOME}
          />
        }
      />
      <Route
        path={ROUTES.TV_EPISODES}
        element={
          <ProtectedRoute
            element={<TvEpisodes isFirstSection={true} />}
            condition={accountType}
            redirectTo={ROUTES.HOME}
          />
        }
      />

      <Route
        path={ROUTES.SUPPORT}
        element={
          <ProtectedRoute
            element={<Support />}
            condition={accountType}
            redirectTo={ROUTES.HOME}
          />
        }
      />
      <Route
        path={ROUTES.SUBSCRIPTIONS}
        element={
          <ProtectedRoute
            element={<Subscription />}
            condition={accountType}
            redirectTo={ROUTES.HOME}
          />
        }
      />
      <Route
        path={ROUTES.SEARCH}
        element={
          <ProtectedRoute
            element={<Search />}
            condition={accountType}
            redirectTo={ROUTES.HOME}
          />
        }
      />
      <Route
        path={ROUTES.AUTHENTICATION}
        element={
          <ProtectedRoute
            element={<Authentication />}
            redirectTo={ROUTES.HOME}
          />
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
