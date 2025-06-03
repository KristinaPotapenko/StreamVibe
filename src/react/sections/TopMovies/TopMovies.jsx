import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopMovies } from "../../../features/movies/topRatedMovies/topMoviesSlice";
import { TopMoviesContent } from "./TopMoviesContent/TopMoviesContent";
import { ScrollSlider } from "../../components/Slider/ScrollSlider/ScrollSlider";
import { SliderFadeAnimation } from "../../components/Slider/SliderFadeAnimation/SliderFadeAnimation";
import styles from "./TopMovies.module.scss";

export const TopMovies = () => {
  const dispatch = useDispatch();
  const { topMovies } = useSelector(({ topMovies }) => topMovies);
  const [activeSlide, setActiveSlide] = useState(0);
  const baseURL = `https://image.tmdb.org/t/p/w500/`;

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    dispatch(getTopMovies());
  }, [dispatch]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const deltaX = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50;

    if (deltaX > swipeThreshold) {
      setActiveSlide((prev) => (prev < topMovies.length - 1 ? prev + 1 : 0));
    } else if (deltaX < -swipeThreshold) {
      setActiveSlide((prev) => (prev > 0 ? prev - 1 : topMovies.length - 1));
    }
  };

  return (
    <section className={`section container ${styles.section}`}>
      <div
        key={topMovies[activeSlide]?.id}
        className={styles.sliderBg}
        style={{
          backgroundImage: `linear-gradient(0deg,rgba(0, 0, 0, 1) 16%, rgba(20, 20, 20, 0.26) 100%), url(${baseURL}${topMovies[activeSlide]?.backdrop_path})`,
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <SliderFadeAnimation activeSlide={activeSlide}>
          <div className={styles.sliderContent}>
            <TopMoviesContent topMovies={topMovies} activeSlide={activeSlide} />
            <ScrollSlider
              transparent={true}
              totalSlides={topMovies.length}
              visibleItems={1}
              activeSlide={activeSlide}
              setActiveSlide={setActiveSlide}
            />
          </div>
        </SliderFadeAnimation>
      </div>
    </section>
  );
};
