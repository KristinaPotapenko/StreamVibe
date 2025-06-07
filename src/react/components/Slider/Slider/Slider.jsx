import { useEffect, useMemo, useRef, useState } from "react";
import { useWindowWidth } from "../../../../scripts/hook/useWindowWidth";
import { SectionHeader } from "../../Section/SectionHeader/sectionHeader";
import { baseImageURL } from "../../../../utils/constants";
import { getRouteWithId } from "../../../../scripts/helpers/getRouteWithId";
import { ScrollSlider } from "../ScrollSlider/ScrollSlider";
import { SliderCard } from "../SliderCard/SliderCard";
import {
  SliderCardCategoriesFooter,
  SliderCardGenresFooter,
  SliderCardMustWatchFooter,
  SliderCardReleasesFooter,
  SliderCardTrendingFooter,
} from "../SliderCard/SliderCardFooter/SliderCardFooter";
import styles from "./Slider.module.scss";

export const Slider = ({
  id,
  route,
  title,
  description,
  list,
  image,
  footer,
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

  const totalSlides = Math.ceil(list.length / slides);

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
                  name={slide.name}
                  cardWidth={cardWidth}
                >
                  {footer === "genres" && (
                    <SliderCardCategoriesFooter
                      path={getRouteWithId(route, slide.id)}
                      name={slide.name}
                    />
                  )}
                  {footer === "topGenres" && (
                    <SliderCardGenresFooter
                      path={getRouteWithId(route, slide.id)}
                      name={slide.name}
                    />
                  )}
                  {footer === "trending" && (
                    <SliderCardTrendingFooter
                      name={slide.title ? slide.title : slide.name}
                      average={parseInt(slide.vote_average)}
                      popularity={parseInt(slide.popularity)}
                    />
                  )}
                  {footer === "releases" && (
                    <SliderCardReleasesFooter
                      name={slide.title ? slide.title : slide.name}
                      releaseDate={slide.release_date}
                    />
                  )}
                  {footer === "mustWatch" && (
                    <SliderCardMustWatchFooter
                      name={slide.title ? slide.title : slide.name}
                      average={slide.vote_average}
                      popularity={parseInt(slide.vote_count)}
                    />
                  )}
                </SliderCard>
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
    </>
  );
};
