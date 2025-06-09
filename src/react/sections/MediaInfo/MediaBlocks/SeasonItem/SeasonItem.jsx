import { useState } from "react";
import { formattingDate } from "../../../../../scripts/helpers/formattingDate";
import { baseImageURL, FALLBACK_IMAGE } from "../../../../../utils/constants";
import { Rate } from "../../../../components/Rate/Rate";
import { SliderButton } from "../../../../components/Slider/SliderButton/SliderButton";
import styles from "../../MediaInfo.module.scss";
import stylesSeason from "./SeasonItem.module.scss";

export const SeasonItem = ({ season }) => {
  const [isOpenDetails, setIsOpenDetails] = useState(false);

  const openDetails = () => {
    setIsOpenDetails(!isOpenDetails);
  };

  return (
    <li
      className={`${stylesSeason.season} ${
        isOpenDetails ? stylesSeason.open : ""
      }`}
    >
      <div className={styles.infoHeader}>
        <div className={stylesSeason.info}>
          <p className={styles.name}>{season.name}</p>
          <p className={styles.episodes}>{season.episode_count} Episodes</p>
        </div>
        <SliderButton onClick={openDetails} isGray={true} />
      </div>
      <div className={stylesSeason.details}>
        <img
          src={`${
            season?.poster_path
              ? baseImageURL + season?.poster_path
              : FALLBACK_IMAGE
          }`}
          alt={season?.name}
        />
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
        </div>
      </div>
    </li>
  );
};
