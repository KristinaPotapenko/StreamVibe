import { baseImageURL } from "../../../utils/constants";
import { MediaContent } from "../../components/MediaContent/MediaContent";
import styles from "./Preview.module.scss";

export const Preview = ({ media }) => {
  return (
    <section className={`section container ${styles.section}`}>
      <div
        className={styles.sliderBg}
        style={{
          backgroundImage: `linear-gradient(0deg,rgba(0, 0, 0, 1) 16%, rgba(20, 20, 20, 0.26) 100%), url(${baseImageURL}${media?.backdrop_path})`,
        }}
      >
        <div className={styles.sliderContent}>
          <MediaContent media={media} />
        </div>
      </div>
    </section>
  );
};
