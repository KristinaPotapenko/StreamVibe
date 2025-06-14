import { Link } from "react-router-dom";
import { getRouteWithId } from "../../../../scripts/helpers/getRouteWithId";
import { ROUTES } from "../../../../utils/routes";
import { scrollToTop } from "../../../../scripts/helpers/scrollToTop";
import { baseImageURL, FALLBACK_IMAGE } from "../../../../utils/constants";
import { Rate } from "../../Rate/Rate";
import styles from "./MediaCard.module.scss";

export const MediaCard = ({ media, type }) => {
  const title = media?.title ? media?.title : media?.name;
  const date = media.release_date ? media.release_date : media.first_air_date;
  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const route = type === "movies" ? "MOVIE_DETAILS" : "TV_DETAILS";

  return (
    <li className={styles.card}>
      <Link to={getRouteWithId(ROUTES[route], media.id)} onClick={scrollToTop}>
        <div className={styles.image}>
          <img
            src={
              media.backdrop_path
                ? baseImageURL + media.backdrop_path
                : FALLBACK_IMAGE
            }
            alt={media.title}
          />
        </div>
      </Link>
      <div className={styles.content}>
        <div className={styles.infoWrapper}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.infoBlock}>
            <svg className="icon">
              <use xlinkHref="/assets/icon/sprite.svg#like" />
            </svg>
            <p className={styles.info}>{parseInt(media.popularity)}</p>
          </div>
        </div>
        <div className={styles.infoWrapper}>
          <p className={`${styles.info} ${styles.infoReleased}`}>
            {formattedDate}
          </p>
          <div className={styles.rateBlock}>
            <Rate average={media.vote_average} />
          </div>
        </div>
      </div>
    </li>
  );
};
