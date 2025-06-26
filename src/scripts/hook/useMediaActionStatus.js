import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearError } from "../../features/appStatusSlice";

export const useMediaActionStatus = (setShowModal) => {
  const dispatch = useDispatch();

  const error = useSelector(({ appStatus }) => appStatus.error);

  const watchlistMessage = useSelector(({ watchlist }) => watchlist.message);
  const favoriteMessage = useSelector(({ favorite }) => favorite.message);

  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (error) setShowModal(true);
  }, [error]);

  useEffect(() => {
    if (watchlistMessage) {
      setMessage(watchlistMessage);
    } else if (favoriteMessage) {
      setMessage(favoriteMessage);
    }
  }, [watchlistMessage, favoriteMessage]);

  const handleCloseModal = () => {
    setMessage("");
    dispatch(clearError());
    setShowModal(false);
  };

  return { message, error, handleCloseModal };
};
