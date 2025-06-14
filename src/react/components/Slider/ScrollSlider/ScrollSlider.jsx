import { Pagination } from "../Pagination/Pagination";
import { SliderButton } from "../SliderButton/SliderButton";
import styles from "./ScrollSlider.module.scss";

export const ScrollSlider = ({
  transparent = false,
  small = false,
  totalSlides,
  visibleItems,
  activeSlide,
  setActiveSlide,
}) => {
  const handlePrevSlide = () => {
    setActiveSlide((prevActiveSlide) => {
      if (prevActiveSlide === 0)
        return totalSlides * visibleItems - visibleItems;
      return prevActiveSlide - visibleItems;
    });
  };

  const handleNextSlide = () => {
    setActiveSlide((prevActiveSlide) => {
      if (prevActiveSlide === totalSlides * visibleItems - visibleItems)
        return 0;
      return prevActiveSlide + visibleItems;
    });
  };

  return (
    <div
      className={`${styles.wrapper} ${transparent ? styles.transparent : ""} ${
        small ? styles.small : ""
      }`}
    >
      <SliderButton onClick={handlePrevSlide} isGray={small} />
      <Pagination
        slides={totalSlides}
        visibleItems={visibleItems}
        activeSlide={activeSlide}
      />
      <SliderButton onClick={handleNextSlide} isRight={true} isGray={small} />
    </div>
  );
};
