import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopMovies } from "../../../features/movies/topRatedMovies/topMoviesSlice";
import { TopMoviesContent } from "./TopMoviesContent/TopMoviesContent";
import { ScrollSlider } from "../../components/Slider/ScrollSlider/ScrollSlider";
import styles from "./TopMovies.module.scss";

export const TopMovies = () => {
  const dispatch = useDispatch();
  const { topMovies } = useSelector(({ topMovies }) => topMovies);
  const [activeSlide, setActiveSlide] = useState(0);

  const baseURL = `https://image.tmdb.org/t/p/w500/`;

  useEffect(() => {
    dispatch(getTopMovies());
  }, [dispatch]);

  return (
    <section className={`section container ${styles.section}`}>
      <div
        key={topMovies[activeSlide]?.id}
        className={styles.sliderBg}
        style={{
          backgroundImage: `linear-gradient(0deg,rgba(0, 0, 0, 1) 16%, rgba(20, 20, 20, 0.26) 100%), url(${baseURL}${topMovies[activeSlide]?.backdrop_path})`,
        }}
      >
        <div className={styles.slider}>
          <TopMoviesContent topMovies={topMovies} activeSlide={activeSlide} />
          <ScrollSlider
            transparent={true}
            totalSlides={topMovies.length}
            visibleItems={1}
            activeSlide={activeSlide}
            setActiveSlide={setActiveSlide}
          />
        </div>
      </div>
    </section>
  );
};
