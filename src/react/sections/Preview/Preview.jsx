import { baseImageURL, FALLBACK_IMAGE } from "../../../utils/constants";
import { MediaContent } from "../../components/MediaContent/MediaContent";
import styles from "./Preview.module.scss";

export const Preview = ({ isFirstSection = false, media, isMovie }) => {
  return (
    <section
      className={`section container ${isFirstSection ? "first-section" : ""} ${
        styles.section
      }`}
    >
      <div
        className={styles.sliderBg}
        style={{
          backgroundImage: `linear-gradient(0deg,rgba(0, 0, 0, 1) 16%, rgba(20, 20, 20, 0.26) 100%), url(${
            media.backdrop_path
              ? baseImageURL + media?.backdrop_path
              : FALLBACK_IMAGE
          })`,
        }}
      >
        <div className={styles.sliderContent}>
          <MediaContent media={media} isMovie={isMovie} />
        </div>
      </div>
    </section>
  );
};
