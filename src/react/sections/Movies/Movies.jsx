import { SectionSliders } from "../../components/Slider/SectionSliders/SectionSliders";
import { GenresMovies } from "./Genres/GenresMovies";
import { TopGenresMovies } from "./TopGenres/TopGenresMovies";
import styles from "./Movies.module.scss";

export const Movies = () => {
  return (
    <section className="section container">
      <SectionSliders name="Movies">
        <ul className={styles.sliders}>
          <li className={styles.slider}>
            <GenresMovies />
          </li>
          <li className={styles.slider}>
            <TopGenresMovies />
          </li>
        </ul>
      </SectionSliders>
    </section>
  );
};
