import { baseImageURL } from "../../../../utils/constants";
import { Rate } from "../../../components/Rate/Rate";
import styles from ".././MediaInfo.module.scss";

export const MediaAside = ({
  year,
  languages,
  rating,
  gernes,
  director,
  runtime,
}) => {
  return (
    <aside className={styles.aside}>
      <div className={styles.infoBlock}>
        <div className={styles.info}>
          <div className={styles.infoName}>
            <svg className="icon">
              <use xlinkHref="/assets/icon/sprite.svg#calendar" />
            </svg>
            <p className={styles.subtitle}>Released Year</p>
          </div>
          <ul className={styles.infoContent}>
            <li className={styles.infoItem}>
              <p className={styles.description}>{year}</p>
            </li>
          </ul>
        </div>
        <div className={styles.info}>
          <div className={styles.infoName}>
            <svg className="icon">
              <use xlinkHref="/assets/icon/sprite.svg#language" />
            </svg>
            <p className={styles.subtitle}>Available Languages</p>
          </div>
          <ul className={styles.infoContent}>
            {languages.map((language) => {
              return (
                <li key={language.english_name} className={styles.infoItem}>
                  <p className={styles.description}>{language.english_name}</p>
                </li>
              );
            })}
          </ul>
        </div>
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
                <Rate average={rating} />
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.info}>
          <div className={styles.infoName}>
            <svg className="icon">
              <use xlinkHref="/assets/icon/sprite.svg#blocks" />
            </svg>
            <p className={styles.subtitle}>Gernes</p>
          </div>
          <ul className={styles.infoContent}>
            {gernes.map((gerne) => {
              return (
                <li key={gerne.id} className={styles.infoItem}>
                  <p className={styles.description}>{gerne.name}</p>
                </li>
              );
            })}
          </ul>
        </div>
        {director && (
          <div className={styles.info}>
            <div className={styles.infoName}>
              <p className={styles.subtitle}>Director</p>
            </div>
            <ul className={styles.infoContent}>
              <li className={styles.infoItem}>
                <img
                  src={`${
                    director.logo_path
                      ? baseImageURL + director.logo_path
                      : "https://img.freepik.com/premium-vector/gallery-simple-icon-vector-image-picture-sign-neumorphism-style-mobile-app-web-ui-vector-eps-10_532800-801.jpg"
                  }`}
                  alt={director.name}
                />
                <p className={styles.description}>{director.name}</p>
              </li>
            </ul>
          </div>
        )}
        {runtime && (
          <div className={styles.info}>
            <div className={styles.infoName}>
              <p className={styles.subtitle}>Runtime</p>
            </div>
            <ul className={styles.infoContent}>
              <li className={styles.infoItem}>
                <p className={styles.description}>{runtime} minutes</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </aside>
  );
};
