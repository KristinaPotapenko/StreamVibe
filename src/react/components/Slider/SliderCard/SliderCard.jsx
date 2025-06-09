import { Link } from "react-router-dom";
import { scrollToTop } from "../../../../scripts/helpers/scrollToTop";
import styles from "./SliderCard.module.scss";

export const SliderCard = ({ path, src, alt, cardWidth, children }) => {
  return (
    <li
      className={styles.card}
      style={{
        minWidth: cardWidth,
      }}
    >
      <Link to={path} onClick={scrollToTop}>
        <div className={styles.image}>
          <img src={src} alt={alt} />
        </div>
      </Link>
      <div className={styles.content}>{children}</div>
    </li>
  );
};
