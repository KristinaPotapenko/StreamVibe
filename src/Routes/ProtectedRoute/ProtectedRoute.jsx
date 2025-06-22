import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ element, condition = true, redirectTo }) => {
  return condition ? element : <Navigate to={redirectTo} replace />;
};
