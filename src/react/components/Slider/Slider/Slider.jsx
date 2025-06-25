import { useEffect, useMemo, useRef, useState } from "react";
import { useWindowWidth } from "../../../../scripts/hook/useWindowWidth";
import { SectionHeader } from "../../Section/SectionHeader/sectionHeader";
import { baseImageURL } from "../../../../utils/constants";
import { getRouteWithId } from "../../../../scripts/helpers/getRouteWithId";
import { renderFooter } from "./renderFooter.jsx";
import { ScrollSlider } from "../ScrollSlider/ScrollSlider";
import { SliderCard } from "../SliderCard/SliderCard";
import styles from "./Slider.module.scss";

export const Slider = ({
  id,
  route,
  routeMore,
  title,
  description,
  list,
  image,
  footer,
  shouldShowMoreCard = false,
}) => {
  const windowWidth = useWindowWidth();
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const sliderRef = useRef();

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
    let slidesCount;
    if (windowWidth >= 1280) {
      slidesCount = 5;
    } else if (windowWidth < 1280 && windowWidth >= 1024) {
      slidesCount = 4;
    } else if (windowWidth < 1024 && windowWidth >= 767) {
      slidesCount = 3;
    } else if (windowWidth < 767) {
      slidesCount = 2;
    }

    const gapValue = windowWidth <= 1024 ? `20px` : `30px`;
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

  const totalSlides = Math.ceil(
    (shouldShowMoreCard ? list.length + 1 : list.length) / slides
  );

  return (
    <>
      <SectionHeader id={id} title={title} description={description}>
        <ScrollSlider
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
          totalSlides={totalSlides}
          visibleItems={slides}
        />
      </SectionHeader>
      <div className={styles.sliderContainer}>
        <div className={styles.sliderWrapper} ref={sliderRef}>
          <ul
            className={styles.cards}
            style={windowWidth > 767 ? { transform } : undefined}
          >
            {list.map((slide) => {
              return (
                <SliderCard
                  key={slide.id}
                  path={getRouteWithId(route, slide.id)}
                  id={slide.id}
                  src={
                    image
                      ? image.find((item) => item.id === slide.id)?.img
                      : baseImageURL + slide?.backdrop_path
                  }
                  alt={slide?.name ? slide?.name : "Slide"}
                  name={slide.name}
                  cardWidth={cardWidth}
                >
                  {renderFooter(footer, slide, route)}
                </SliderCard>
              );
            })}
            {shouldShowMoreCard && (
              <SliderCard
                typeMore={true}
                path={routeMore}
                cardWidth={cardWidth}
              />
            )}
          </ul>
        </div>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </>
  );
};
