import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useMediaActionStatus = (setShowModal) => {
  const watchlistError = useSelector(({ watchlist }) => watchlist.error);
  const favoriteError = useSelector(({ favorite }) => favorite.error);

  const watchlistMessage = useSelector(({ watchlist }) => watchlist.message);
  const favoriteMessage = useSelector(({ favorite }) => favorite.message);

  const [message, setMessage] = useState(null);
  const [errorType, setErrorType] = useState(null);

  useEffect(() => {
    if (watchlistError) {
      setErrorType("watchlist");
      setShowModal(true);
    } else if (favoriteError) {
      setErrorType("favorite");
      setShowModal(true);
    }
  }, [watchlistError, favoriteError]);

  useEffect(() => {
    if (watchlistMessage) {
      setMessage(watchlistMessage);
    } else if (favoriteMessage) {
      setMessage(favoriteMessage);
    }
  }, [watchlistMessage, favoriteMessage]);

  const handleCloseModal = () => {
    setShowModal(false);
    setErrorType(null);
    setMessage("");
  };

  return { message, errorType, handleCloseModal };
};
