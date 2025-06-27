import { Link } from "react-router-dom";
import { scrollToTop } from "../../../../../scripts/helpers/scrollToTop";
import { formattingDate } from "../../../../../scripts/helpers/formattingDate";
import { Rate } from "../../../Rate/Rate";
import styles from "./SliderCardFooter.module.scss";

export const SliderCardCategoriesFooter = ({ path, name }) => {
  return (
    <>
      <p className={styles.text}>{name}</p>
      <Link to={path} onClick={scrollToTop}>
        <svg className="icon">
          <use
            xlinkHref={`${
              import.meta.env.BASE_URL
            }assets/icon/sprite.svg#arrow`}
          />
        </svg>
      </Link>
    </>
  );
};

export const SliderCardGenresFooter = ({ path, name }) => {
  return (
    <>
      <div className={styles.textWrapper}>
        <p className={styles.textSup}>Top 10 In</p>
        <p className={styles.text}>{name}</p>
      </div>
      <Link to={path} onClick={scrollToTop}>
        <svg className="icon">
          <use
            xlinkHref={`${
              import.meta.env.BASE_URL
            }assets/icon/sprite.svg#arrow`}
          />
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
            <use
              xlinkHref={`${
                import.meta.env.BASE_URL
              }assets/icon/sprite.svg#star`}
            />
          </svg>
          <p className={styles.info}>{average}</p>
        </div>
        <div className={styles.infoWrapper}>
          <svg className="icon">
            <use
              xlinkHref={`${
                import.meta.env.BASE_URL
              }assets/icon/sprite.svg#like`}
            />
          </svg>
          <p className={styles.info}>{popularity}</p>
        </div>
      </div>
    </div>
  );
};

export const SliderCardReleasesFooter = ({ name, releaseDate }) => {
  const formattedDate = formattingDate(releaseDate);

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
            <use
              xlinkHref={`${
                import.meta.env.BASE_URL
              }assets/icon/sprite.svg#like`}
            />
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
