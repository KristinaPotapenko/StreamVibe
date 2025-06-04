import { Link } from "react-router-dom";
import styles from "./SliderCard.module.scss";
import { getRouteWithId } from "../../../../scripts/helpers/getRouteWithId";
import { ROUTES } from "../../../../utils/routes";

export const SliderCard = ({ type, id, src, cardWidth, children }) => {
  const path =
    type === "movie"
      ? getRouteWithId(ROUTES.MOVIE, id)
      : getRouteWithId(ROUTES.TV, id);
  return (
    <li
      className={styles.card}
      style={{
        minWidth: cardWidth,
      }}
    >
      <Link to={path}>
        <div className={styles.image}>
          <img src={src} alt="Categories" />
        </div>
      </Link>
      <div className={styles.content}>{children}</div>
    </li>
  );
};
