import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import {
  getSessionId,
  setAccountType,
} from "../../../features/authentication/userAuthenticationSlice";
import { ROUTES } from "../../../utils/routes";

export const Authentication = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sessionId = useSelector(
    ({ userAuthentication }) => userAuthentication.sessionId
  );

  const requestToken = new URLSearchParams(window.location.search).get(
    "request_token"
  );

  useEffect(() => {
    if (requestToken) {
      dispatch(getSessionId(requestToken));
    }
  }, [dispatch, requestToken]);

  useEffect(() => {
    if (sessionId) {
      dispatch(setAccountType("user"));
      localStorage.setItem("accountType", "user");
      localStorage.setItem("sessionId", sessionId);
      navigate(ROUTES.HOME);
    }
  }, [sessionId, navigate]);

  if (!requestToken) {
    return <Navigate to={ROUTES.HOME} replace />;
  }
};
