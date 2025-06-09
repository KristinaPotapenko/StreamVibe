import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { baseImageURL, FALLBACK_IMAGE } from "../../../utils/constants";
import { getTopMovies } from "../../../features/movies/topRatedMovies/topMoviesSlice";
import { MediaContent } from "../../components/MediaContent/MediaContent";
import { ScrollSlider } from "../../components/Slider/ScrollSlider/ScrollSlider";
import { SliderFadeAnimation } from "../../components/Slider/SliderFadeAnimation/SliderFadeAnimation";
import styles from "./TopMovies.module.scss";

export const TopMovies = () => {
  const dispatch = useDispatch();
  const { topMovies } = useSelector(({ topMovies }) => topMovies);
  const [activeSlide, setActiveSlide] = useState(0);

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
        className={styles.sliderBg}
        style={{
          backgroundImage: `linear-gradient(0deg,rgba(0, 0, 0, 1) 16%, rgba(20, 20, 20, 0.26) 100%), url(${
            topMovies[activeSlide]?.backdrop_path
              ? baseImageURL + topMovies[activeSlide]?.backdrop_path
              : FALLBACK_IMAGE
          })`,
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <SliderFadeAnimation activeSlide={activeSlide}>
          <div className={styles.sliderContent}>
            {topMovies.length > 0 && (
              <MediaContent media={topMovies} activeSlide={activeSlide} />
            )}
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
