import { Link } from "react-router-dom";
import styles from "./CategoriesCard.module.scss";

export const CategoriesCard = ({ id, src, name, cardWidth }) => {
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
      <div className={styles.content}>
        <p className={styles.text}>{name}</p>
        <Link to="/categories">
          <svg className="icon">
            <use xlinkHref="/assets/icon/sprite.svg#arrow" />
          </svg>
        </Link>
      </div>
    </li>
  );
};
