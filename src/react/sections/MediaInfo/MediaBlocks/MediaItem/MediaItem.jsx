import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ROUTES } from "../../../../../utils/routes";
import { baseImageURL, FALLBACK_IMAGE } from "../../../../../utils/constants";
import { getTvEpisodeVideo } from "../../../../../features/tv/tvEpisodes/tvEpisodesSlice";
import { getTvSeasonVideo } from "../../../../../features/tv/tvSeasonVideo/tvSeasonVideoSlice";
import { getRouteWithParams } from "../../../../../scripts/helpers/getRouteWithId";
import { scrollToTop } from "../../../../../scripts/helpers/scrollToTop";
import { formattingDate } from "../../../../../scripts/helpers/formattingDate";
import { Button } from "../../../../components/ui/Button/Button";
import { Link } from "../../../../components/ui/Link/Link";
import { Rate } from "../../../../components/Rate/Rate";
import { SliderButton } from "../../../../components/Slider/SliderButton/SliderButton";
import styles from "../../MediaInfo.module.scss";
import stylesMedia from "./MediaItem.module.scss";

export const MediaItem = ({ media, isSeason = false, imageInfo, index }) => {
  const dispatch = useDispatch();
  const { tvId, seasonId } = useParams();

  const condition = isSeason ? media?.season_number : media?.episode_number;
  const image = isSeason ? media?.poster_path : imageInfo?.file_path;

  const [isOpenDetails, setIsOpenDetails] = useState(
    condition === 1 ? true : false
  );
  const [showVideo, setShowVideo] = useState(false);

  const videoKeyObj = isSeason
    ? useSelector(({ tvSeasonVideo }) => tvSeasonVideo.seasonVideos)
    : useSelector(({ tvEpisodes }) => tvEpisodes.tvEpisodeVideo);

  const openDetails = () => {
    setIsOpenDetails(!isOpenDetails);
  };

  useEffect(() => {
    if (showVideo) {
      isSeason
        ? dispatch(getTvSeasonVideo({ tvId, seasonId: index }))
        : dispatch(getTvEpisodeVideo({ tvId, seasonId }));
    }
  }, [showVideo]);

  return showVideo ? (
    <iframe
      width="100%"
      height="500"
      src={`https://www.youtube.com/embed/${videoKeyObj[index]}`}
      title="Video player"
      frameBorder="0"
      allowFullScreen
    ></iframe>
  ) : (
    <li
      className={`${stylesMedia.season} ${
        isOpenDetails ? stylesMedia.open : ""
      }`}
    >
      <div className={`${styles.infoHeader} ${stylesMedia.infoHeader}`}>
        <div className={stylesMedia.info}>
          <p className={styles.name}>{media.name}</p>
          <p className={styles.episodes}>
            {isSeason ? media.episode_count : media.episode_number} Episodes
          </p>
        </div>
        <SliderButton onClick={openDetails} isGray={true} />
      </div>
      <div className={stylesMedia.details}>
        <div>
          <img
            src={`${
              imageInfo?.file_path || media?.poster_path
                ? baseImageURL + image
                : FALLBACK_IMAGE
            }`}
            alt={media?.name}
          />
        </div>
        <div className={stylesMedia.statistics}>
          <div className={styles.info}>
            <div className={styles.infoName}>
              <svg className="icon">
                <use xlinkHref="/assets/icon/sprite.svg#star" />
              </svg>
              <p className={styles.subtitle}>Ratings</p>
            </div>
            <ul className={styles.infoContent}>
              <li className={styles.infoItem}>
                <div className={styles.rate}>
                  <Rate average={media.vote_average} />
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.info}>
            <div className={styles.infoName}>
              <svg className="icon">
                <use xlinkHref="/assets/icon/sprite.svg#calendar" />
              </svg>
              <p className={styles.subtitle}>Released Date</p>
            </div>
            <ul className={styles.infoContent}>
              <li className={styles.infoItem}>
                <p className={styles.description}>
                  {formattingDate(media?.air_date)}
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.info + " " + styles.buttons}>
            <Button
              onClick={() => {
                setShowVideo(true);
              }}
            >
              <svg className="icon">
                <use xlinkHref="/assets/icon/sprite.svg#play" />
              </svg>
              Play Now
            </Button>
            {isSeason && (
              <Link
                isDark={true}
                onClick={scrollToTop}
                to={getRouteWithParams(ROUTES.TV_EPISODES, {
                  tvId: tvId,
                  seasonId: media.season_number,
                })}
              >
                Watch Episodes
              </Link>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};
