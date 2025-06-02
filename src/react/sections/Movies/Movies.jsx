import { SectionSliders } from "../../components/Slider/SectionSliders/SectionSliders";
import { GenresMovies } from "./Genres/GenresMovies";
import { TopGenresMovies } from "./TopGenres/TopGenresMovies";
import { TrendingMovies } from "./Trending/TrendingMovies";
import { NewReleasesMovies } from "./NewReleases/NewReleasesMovies";
import { MustWatchMovies } from "./MustWatch/MustWatchMovies";
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
          <li className={styles.slider}>
            <TrendingMovies />
          </li>
          <li className={styles.slider}>
            <NewReleasesMovies />
          </li>
          <li className={styles.slider}>
            <MustWatchMovies />
          </li>
        </ul>
      </SectionSliders>
    </section>
  );
};
