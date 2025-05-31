import { Route, Routes } from "react-router-dom";
import { Home } from "../react/pages/Home/Home";
import { ROUTES } from "../utils/routes";
import { MoviesAndTV } from "../react/pages/MoviesAndTV/MoviesAndTV";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={ROUTES.MOVIES_TV} element={<MoviesAndTV />} />
    </Routes>
  );
};
