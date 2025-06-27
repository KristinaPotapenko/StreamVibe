import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieVideo } from "../../../features/movies/movieVideo/movieVideoSlice";
import {
  addFavoriteMedia,
  resetFavoriteSuccess,
} from "../../../features/media/favoriteSlice";
import {
  addWatchlistMedia,
  resetWatchlistSuccess,
} from "../../../features/media/watchlistSlice";
import { getWatchlistMovies } from "../../../features/movies/watchlistMovies/watchlistMoviesSlice";
import { getWatchlistTV } from "../../../features/tv/watchlistTV/watchlistTVSlice";
import { getFavoritesTV } from "../../../features/tv/favoritesTV/favoritesTVSlice";
import { getFavoritesMovies } from "../../../features/movies/favoritesMovies/favoritesMoviesSlice";
import { scrollToTop } from "../../../scripts/helpers/scrollToTop";
import { Button } from "../ui/Button/Button";
import { Actions } from "../Actions/Actions";
import { ActionsItem } from "../Actions/ActionsItem/ActionsItem";
import { SectionTitle } from "../Section/SectionTitle/SectionTitle";
import styles from "./MediaContent.module.scss";

export const MediaContent = ({
  media,
  activeSlide,
  showVideo,
  setShowVideo,
  isMovie,
  isTopMovie,
  setShowModal,
}) => {
  const accountType = localStorage.getItem("accountType");

  const dispatch = useDispatch();

  const watchlistTV = useSelector(({ watchlistTV }) => watchlistTV.watchlistTV);
  const watchlistMovies = useSelector(
    ({ watchlistMovies }) => watchlistMovies.watchlistMovies
  );
  const favoritesTV = useSelector(({ favoritesTV }) => favoritesTV.favoritesTV);
  const favoritesMovies = useSelector(
    ({ favoritesMovies }) => favoritesMovies.favoritesMovies
  );

  const topMovieId = media[activeSlide]?.id;

  const isInWatchlist = isMovie
    ? watchlistMovies.some(
        (movie) => movie.id === (isTopMovie ? topMovieId : media.id)
      )
    : watchlistTV.some((tv) => tv.id === (isTopMovie ? topMovieId : media.id));
  const isInFavorites = isMovie
    ? favoritesMovies.some(
        (movie) => movie.id === (isTopMovie ? topMovieId : media.id)
      )
    : favoritesTV.some((tv) => tv.id === (isTopMovie ? topMovieId : media.id));

  const isSuccessFavorite = useSelector(({ favorite }) => favorite.success);
  const isSuccessWatchlist = useSelector(({ watchlist }) => watchlist.success);

  const refreshUserLists = () => {
    dispatch(getWatchlistTV());
    dispatch(getWatchlistMovies());
    dispatch(getFavoritesTV());
    dispatch(getFavoritesMovies());
  };

  useEffect(() => {
    {
      accountType === "user" && refreshUserLists();
    }
  }, []);

  useEffect(() => {
    if (isSuccessFavorite || isSuccessWatchlist) {
      setShowModal(true);
      refreshUserLists();
      dispatch(resetFavoriteSuccess());
      dispatch(resetWatchlistSuccess());
    }
  }, [isSuccessFavorite, isSuccessWatchlist]);

  const title = useMemo(() => {
    const item = topMovieId ? media[activeSlide] : media;
    return item?.original_title || item?.original_name || "Untitled";
  }, [topMovieId, media, activeSlide]);

  const videoKey = useSelector(({ movieVideo }) => movieVideo.movieKey);

  const mediaId = useMemo(
    () => (isTopMovie ? topMovieId : media.id),
    [isTopMovie, topMovieId, media]
  );

  useEffect(() => {
    showVideo && dispatch(getMovieVideo(mediaId));
  }, [showVideo]);

  return showVideo ? (
    <div className={styles.content}>
      <iframe
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/${videoKey}`}
        title="Video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  ) : (
    <div className={styles.content}>
      <SectionTitle title={title} />
      <p className={styles.description}>
        {topMovieId ? media[activeSlide]?.overview : media?.overview}
      </p>
      <div className={styles.actions}>
        {isMovie && (
          <Button
            onClick={() => {
              setShowVideo(true);
              scrollToTop();
            }}
          >
            <svg className="icon">
              <use
                xlinkHref={`${
                  import.meta.env.BASE_URL
                }assets/icon/sprite.svg#play`}
              />
            </svg>
            Play Now
          </Button>
        )}
        <Actions>
          {accountType === "user" && (
            <>
              <ActionsItem
                active={isInWatchlist}
                type="button"
                accent={true}
                href="plus"
                onClick={() => {
                  dispatch(
                    addWatchlistMedia({
                      media_type: isMovie ? "movie" : "tv",
                      media_id: mediaId,
                      watchlist: !isInWatchlist,
                    })
                  );
                }}
              />
              <ActionsItem
                active={isInFavorites}
                type="button"
                accent={true}
                href="like"
                onClick={() => {
                  dispatch(
                    addFavoriteMedia({
                      media_type: isMovie ? "movie" : "tv",
                      media_id: mediaId,
                      favorite: !isInFavorites,
                    })
                  );
                }}
              />
            </>
          )}
        </Actions>
      </div>
    </div>
  );
};
