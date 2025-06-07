import { useLocation, useParams } from "react-router-dom";

export const useFetchArguments = () => {
  const params = useParams();
  const location = useLocation();
  const pathname = location.pathname;

  const fetchArguments = {};
  const isDetailsPage = params.movieId || params.tvId;

  if (pathname.includes("movies")) {
    fetchArguments.mediaType = isDetailsPage ? "movie" : "movies";
  }

  if (pathname.includes("tvs")) {
    fetchArguments.mediaType = isDetailsPage ? "tv" : "tvs";
  }

  if (params.movieId) fetchArguments.mediaId = params.movieId;
  if (params.tvId) fetchArguments.mediaId = params.tvId;

  if (params.genreId) fetchArguments.genreId = params.genreId;
  if (pathname.includes("topGenre")) fetchArguments.top10 = true;

  return fetchArguments;
};
