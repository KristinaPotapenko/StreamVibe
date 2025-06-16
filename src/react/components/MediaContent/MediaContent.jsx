import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieVideo } from "../../../features/movies/movieVideo/movieVideoSlice";
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
}) => {
  const dispatch = useDispatch();

  const { movieId } = useParams();
  const topMovieId = media[activeSlide]?.id;

  const videoKey = useSelector(({ movieVideo }) => movieVideo.movieKey);

  useEffect(() => {
    showVideo && dispatch(getMovieVideo(isTopMovie ? topMovieId : movieId));
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
          <ActionsItem type="button" accent={true} href="plus" />
          <ActionsItem type="button" accent={true} href="like" />
          <ActionsItem type="button" accent={true} href="volume" />
        </Actions>
      </div>
    </div>
  );
};
