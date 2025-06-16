import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { baseImageURL, FALLBACK_IMAGE } from "../../../../../utils/constants";
import { getTvSeasonVideo } from "../../../../../features/tv/tvSeasonVideo/tvSeasonVideoSlice";
import { formattingDate } from "../../../../../scripts/helpers/formattingDate";
import { Button } from "../../../../components/ui/Button/Button";
import { Rate } from "../../../../components/Rate/Rate";
import { SliderButton } from "../../../../components/Slider/SliderButton/SliderButton";
import styles from "../../MediaInfo.module.scss";
import stylesSeason from "./SeasonItem.module.scss";

export const SeasonItem = ({ season }) => {
  const dispatch = useDispatch();
  const { tvId } = useParams();
  const [isOpenDetails, setIsOpenDetails] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoKeyObj = useSelector(
    ({ tvSeasonVideo }) => tvSeasonVideo.seasonVideos
  );

  const openDetails = () => {
    setIsOpenDetails(!isOpenDetails);
  };

  useEffect(() => {
    showVideo &&
      dispatch(getTvSeasonVideo({ tvId, seasonId: season.season_number + 1 }));
  }, [showVideo]);

  return showVideo ? (
    <iframe
      width="100%"
      height="500"
      src={`https://www.youtube.com/embed/${
        videoKeyObj[season.season_number + 1]
      }`}
      title="Video player"
      frameBorder="0"
      allowFullScreen
    ></iframe>
  ) : (
    <li
      className={`${stylesSeason.season} ${
        isOpenDetails ? stylesSeason.open : ""
      }`}
    >
      <div className={`${styles.infoHeader} ${stylesSeason.infoHeader}`}>
        <div className={stylesSeason.info}>
          <p className={styles.name}>{season.name}</p>
          <p className={styles.episodes}>{season.episode_count} Episodes</p>
        </div>
        <SliderButton onClick={openDetails} isGray={true} />
      </div>
      <div className={stylesSeason.details}>
        <div>
          <img
            src={`${
              season?.poster_path
                ? baseImageURL + season?.poster_path
                : FALLBACK_IMAGE
            }`}
            alt={season?.name}
          />
        </div>
        <div className={stylesSeason.statistics}>
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
                  <Rate average={season.vote_average} />
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
                  {formattingDate(season?.air_date)}
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.info}>
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
          </div>
        </div>
      </div>
    </li>
  );
};
