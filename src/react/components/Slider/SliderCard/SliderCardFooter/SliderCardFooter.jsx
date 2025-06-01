import { Link } from "react-router-dom";
import styles from "./SliderCardFooter.module.scss";

export const SliderCardCategoriesFooter = ({ name }) => {
  return (
    <>
      <p className={styles.text}>{name}</p>
      <Link to="/categories">
        <svg className="icon">
          <use xlinkHref="/assets/icon/sprite.svg#arrow" />
        </svg>
      </Link>
    </>
  );
};

export const SliderCardGenresFooter = ({ name }) => {
  return (
    <>
      <div className={styles.textWrapper}>
        <p className={styles.textSup}>Top 10 In</p>
        <p className={styles.text}>{name}</p>
      </div>
      <Link to="/categories">
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
