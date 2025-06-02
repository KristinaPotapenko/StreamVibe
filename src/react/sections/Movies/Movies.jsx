import { SectionSliders } from "../../components/Slider/SectionSliders/SectionSliders";
import { GenresMovies } from "./Genres/GenresMovies";
import styles from "./Movies.module.scss";

export const Movies = () => {
  return (
    <section className="section container">
      <SectionSliders name="Movies">
        <ul className={styles.sliders}>
          <li className={styles.slider}>
            <GenresMovies />
          </li>
        </ul>
      </SectionSliders>
    </section>
  );
};
