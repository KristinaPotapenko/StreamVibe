import { baseImageURL } from "../../../../utils/constants";
import { Reviews } from "../../../components/Reviews/Reviews";
import { Button } from "../../../components/ui/Button/Button";
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
            {companies.map((companie) => (
              <img
                key={companie.id}
                className={styles.image}
                src={`${
                  companie.logo_path
                    ? baseImageURL + companie.logo_path
                    : "https://img.freepik.com/premium-vector/gallery-simple-icon-vector-image-picture-sign-neumorphism-style-mobile-app-web-ui-vector-eps-10_532800-801.jpg"
                }`}
                alt={companie.name}
              />
            ))}
          </div>
        </div>
      )}
      <div className={styles.infoBlock}>
        <div className={styles.infoHeader}>
          <p className={styles.subtitle}>Reviews</p>
          <Button isDark={true}>
            <svg className="icon">
              <use xlinkHref="/assets/icon/sprite.svg#plus" />
            </svg>
            Add Your Review
          </Button>
        </div>
        <Reviews />
      </div>
    </div>
  );
};
