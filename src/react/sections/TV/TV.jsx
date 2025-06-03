import { SectionSliders } from "../../components/Slider/SectionSliders/SectionSliders";
import { GenresTV } from "./Genres/GenresTV";
import { TopGenresTV } from "./TopGenres/TopGenresTV";
import { TrendingTV } from "./Trending/TrendingTV";
import { NewReleasesTV } from "./NewReleases/NewReleasesTV";
import { MustWatchTV } from "./MustWatch/MustWatchTV";
import styles from "./TV.module.scss";

export const TV = () => {
  return (
    <section className="section container">
      <SectionSliders name="TV">
        <ul className={styles.sliders}>
          <li className={styles.slider}>
            <GenresTV />
          </li>
          <li className={styles.slider}>
            <TopGenresTV />
          </li>
          <li className={styles.slider}>
            <TrendingTV />
          </li>
          <li className={styles.slider}>
            <NewReleasesTV />
          </li>
          <li className={styles.slider}>
            <MustWatchTV />
          </li>
        </ul>
      </SectionSliders>
    </section>
  );
};
