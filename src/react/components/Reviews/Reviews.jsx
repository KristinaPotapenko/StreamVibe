import { useEffect, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useWindowWidth } from "../../../scripts/hook/useWindowWidth";
import { SectionTitle } from "../Section/SectionTitle/SectionTitle";
import { ReviewsCard } from "./ReviewsCard/ReviewsCard";
import { ScrollSlider } from "../Slider/ScrollSlider/ScrollSlider";
import styles from "../Slider/Slider/Slider.module.scss";
import stylesRev from "./Reviews.module.scss";

export const Reviews = () => {
  const windowWidth = useWindowWidth();
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const sliderRef = useRef();

  const reviews = useSelector(({ reviews }) => reviews.reviews);

  useEffect(() => {
    setActiveSlide(0);
  }, [windowWidth]);

  useEffect(() => {
    if (windowWidth < 768 && sliderRef.current) {
      const handleScroll = () => {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        const newProgress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
        setProgress(newProgress);
      };
      sliderRef.current.addEventListener("scroll", handleScroll);

      return () =>
        sliderRef.current?.removeEventListener("scroll", handleScroll);
    }
  }, [windowWidth]);

  const { slides, cardWidth, transform } = useMemo(() => {
    let slidesCount = 2;
    if (windowWidth < 1024) {
      slidesCount = 1;
    }

    const gapValue = windowWidth >= 1024 ? `30px` : `20px`;
    const cardWidthValue = `calc((100% - ${
      slidesCount - 1
    } * ${gapValue}) / ${slidesCount})`;

    const transformValue = `translateX(calc(-${activeSlide} * (${cardWidthValue} + ${gapValue})))`;

    return {
      slides: slidesCount,
      cardWidth: cardWidthValue,
      transform: transformValue,
    };
  }, [windowWidth, activeSlide]);

  const totalSlides = Math.ceil(reviews.length / slides);

  return (
    <div className={stylesRev.wrapper}>
      {reviews.length === 0 ? (
        <SectionTitle title="No reviews yet." />
      ) : (
        <div className={styles.sliderContainer}>
          <div className={styles.sliderWrapper} ref={sliderRef}>
            <ul
              className={styles.cards}
              style={windowWidth > 767 ? { transform } : undefined}
            >
              {reviews.map((comment) => {
                return (
                  <ReviewsCard
                    key={comment.id}
                    cardWidth={cardWidth}
                    comment={comment}
                  />
                );
              })}
            </ul>
          </div>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}
      {reviews.length > 0 && (
        <ScrollSlider
          small={true}
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
          totalSlides={totalSlides}
          visibleItems={slides}
        />
      )}
    </div>
  );
};
