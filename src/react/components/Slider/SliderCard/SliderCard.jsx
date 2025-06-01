import { Link } from "react-router-dom";
import styles from "./SliderCard.module.scss";

export const SliderCard = ({ id, src, cardWidth, children }) => {
  return (
    <li
      className={styles.card}
      style={{
        minWidth: cardWidth,
      }}
    >
      <Link to={`/categories${id}`}>
        <div className={styles.image}>
          <img src={src} alt="Categories" />
        </div>
      </Link>
      <div className={styles.content}>{children}</div>
    </li>
  );
};
