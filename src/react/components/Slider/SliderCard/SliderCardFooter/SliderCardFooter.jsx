import { Link } from "react-router-dom";
import styles from "./SliderCardFooter.module.scss";
import { Rate } from "../../../Rate/Rate";
import { getRouteWithId } from "../../../../../scripts/helpers/getRouteWithId";
import { ROUTES } from "../../../../../utils/routes";

export const SliderCardCategoriesFooter = ({ type, name, id }) => {
  const path =
    type === "movie"
      ? getRouteWithId(ROUTES.MOVIE, id)
      : getRouteWithId(ROUTES.TV, id);
  return (
    <>
      <p className={styles.text}>{name}</p>
      <Link to={path}>
        <svg className="icon">
          <use xlinkHref="/assets/icon/sprite.svg#arrow" />
        </svg>
      </Link>
    </>
  );
};

export const SliderCardGenresFooter = ({ type, name, id }) => {
  const path =
    type === "movie"
      ? getRouteWithId(ROUTES.MOVIE, id)
      : getRouteWithId(ROUTES.TV, id);
  return (
    <>
      <div className={styles.textWrapper}>
        <p className={styles.textSup}>Top 10 In</p>
        <p className={styles.text}>{name}</p>
      </div>
      <Link to={path}>
        <svg className="icon">
          <use xlinkHref="/assets/icon/sprite.svg#arrow" />
        </svg>
      </Link>
    </>
  );
};

export const SliderCardTrendingFooter = ({ name, average, popularity }) => {
  return (
    <div className={styles.footer}>
      <p className={styles.text}>{name}</p>
      <div className={styles.details}>
        <div className={styles.infoWrapper}>
          <svg className="icon">
            <use xlinkHref="/assets/icon/sprite.svg#star" />
          </svg>
          <p className={styles.info}>{average}</p>
        </div>
        <div className={styles.infoWrapper}>
          <svg className="icon">
            <use xlinkHref="/assets/icon/sprite.svg#like" />
          </svg>
          <p className={styles.info}>{popularity}</p>
        </div>
      </div>
    </div>
  );
};

export const SliderCardReleasesFooter = ({ name, releaseDate }) => {
  const formattedDate = new Date(releaseDate).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return (
    <div className={styles.footer}>
      <p className={styles.text}>{name}</p>
      <div className={styles.infoWrapper}>
        <p className={`${styles.info} ${styles.infoReleased}`}>
          Released at {formattedDate}
        </p>
      </div>
    </div>
  );
};

export const SliderCardMustWatchFooter = ({ name, average, popularity }) => {
  return (
    <div className={styles.footer}>
      <p className={styles.text}>{name}</p>
      <div className={styles.details}>
        <div className={styles.infoWrapper}>
          <svg className="icon">
            <use xlinkHref="/assets/icon/sprite.svg#like" />
          </svg>
          <p className={styles.info}>{popularity}</p>
        </div>
        <div className={styles.infoWrapper}>
          <Rate average={average} />
        </div>
      </div>
    </div>
  );
};
