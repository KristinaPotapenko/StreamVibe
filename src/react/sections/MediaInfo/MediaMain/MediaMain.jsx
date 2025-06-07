import { baseImageURL } from "../../../../utils/constants";
import styles from ".././MediaInfo.module.scss";

export const MediaMain = ({ description, companies }) => {
  return (
    <div className={styles.infoWrapper}>
      <div className={styles.infoBlock}>
        <p className={styles.subtitle}>Description</p>
        <p className={styles.description}>{description}</p>
      </div>
      {companies.length > 0 && (
        <div className={styles.infoBlock}>
          <p className={styles.subtitle}>Companies</p>
          <div className={styles.infoContent}>
            {companies.map(
              (companie) =>
                companie.logo_path && (
                  <img
                    key={companie.id}
                    className={styles.image}
                    src={`${baseImageURL}${companie.logo_path}`}
                  />
                )
            )}
          </div>
        </div>
      )}
      <div className={styles.infoBlock}>
        <p className={styles.subtitle}>Reviews</p>
      </div>
    </div>
  );
};
