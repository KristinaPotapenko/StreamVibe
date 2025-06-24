import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieVideo } from "../../../features/movies/movieVideo/movieVideoSlice";
import {
  addFavoriteMedia,
  resetFavoriteSuccess,
} from "../../../features/media/favoriteSlice";
import {
  addWatchlistMedia,
  resetWatchlistSuccess,
} from "../../../features/media/watchlistSlice";
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
  const dispatch = useDispatch();
  const isSuccessFavorite = useSelector(({ favorite }) => favorite.success);
  const isSuccessWatchlist = useSelector(({ watchlist }) => watchlist.success);

  useEffect(() => {
    if (isSuccessFavorite || isSuccessWatchlist) {
      setShowModal(true);
      dispatch(resetFavoriteSuccess());
      dispatch(resetWatchlistSuccess());
    }
  }, [isSuccessFavorite, isSuccessWatchlist]);

  const accountType = localStorage.getItem("accountType");

  const { movieId } = useParams();
  const topMovieId = media[activeSlide]?.id;

  const videoKey = useSelector(({ movieVideo }) => movieVideo.movieKey);

  const mediaId = isTopMovie ? topMovieId : movieId;

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
      <SectionTitle
        title={
          media[activeSlide]?.original_title
            ? media[activeSlide]?.original_title
            : media[activeSlide]?.original_name
        }
      />
      <p className={styles.description}>{media[activeSlide]?.overview}</p>
      <div className={styles.actions}>
        {isMovie && (
          <Button
            onClick={() => {
              setShowVideo(true);
              scrollToTop();
            }}
          >
            <svg className="icon">
              <use xlinkHref="/assets/icon/sprite.svg#play" />
            </svg>
            Play Now
          </Button>
        )}
        <Actions>
          {accountType === "user" && (
            <>
              <ActionsItem
                type="button"
                accent={true}
                href="plus"
                onClick={() => {
                  dispatch(
                    addWatchlistMedia({
                      media_type: isMovie ? "movie" : "tv",
                      media_id: mediaId,
                      watchlist: true,
                    })
                  );
                }}
              />
              <ActionsItem
                type="button"
                accent={true}
                href="like"
                onClick={() => {
                  dispatch(
                    addFavoriteMedia({
                      media_type: isMovie ? "movie" : "tv",
                      media_id: media.id,
                      favorite: true,
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
