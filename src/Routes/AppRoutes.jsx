import { Route, Routes } from "react-router-dom";
import { Home } from "../react/pages/Home/Home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
};
