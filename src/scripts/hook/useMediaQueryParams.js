import { useLocation, useParams } from "react-router-dom";

export const useMediaQueryParams = () => {
  const { movieId, tvId, genreId } = useParams();
  const { pathname } = useLocation();

  const isDetails = Boolean(movieId || tvId);
  const isMoviesRoute = pathname.includes("movies");
  const isTVRoute = pathname.includes("tvs");

  return {
    mediaType: isDetails
      ? movieId
        ? "movie"
        : "tv"
      : isMoviesRoute
      ? "movies"
      : isTVRoute
      ? "tvs"
      : null,
    mediaId: movieId || tvId || null,
    genreId: genreId || null,
    isTopGenre: pathname.includes("topGenre"),
  };
};
