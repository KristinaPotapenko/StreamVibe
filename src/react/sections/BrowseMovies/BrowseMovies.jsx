import { SectionSliders } from "../../components/Slider/SectionSliders/SectionSliders";
import { GenresMovies } from "./Genres/GenresMovies";
import { TopGenresMovies } from "./TopGenres/TopGenresMovies";
import { TrendingMovies } from "./Trending/TrendingMovies";
import { NewReleasesMovies } from "./NewReleases/NewReleasesMovies";
import { MustWatchMovies } from "./MustWatch/MustWatchMovies";
import styles from "./BrowseMovies.module.scss";

export const BrowseMovies = () => {
  return (
    <section id="movies" className={`section container ${styles.section}`}>
      <SectionSliders name="Movies">
        <ul className={styles.sliders}>
          <li id="moviesGenres" className={styles.slider}>
            <GenresMovies />
          </li>
          <li className={styles.slider}>
            <TopGenresMovies />
          </li>
          <li id="moviesTrending" className={styles.slider}>
            <TrendingMovies />
          </li>
          <li id="moviesNewRealeases" className={styles.slider}>
            <NewReleasesMovies />
          </li>
          <li id="moviesMustWatch" className={styles.slider}>
            <MustWatchMovies />
          </li>
        </ul>
      </SectionSliders>
    </section>
  );
};
