import { useEffect, useMemo, useState } from "react";
import { useWindowWidth } from "../../../../scripts/hook/useWindowWidth";
import { SectionHeader } from "../../Section/SectionHeader/sectionHeader";
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

export const Slider = ({ title, description, list, image, footer }) => {
  const baseURL = `https://image.tmdb.org/t/p/w500/`;
  const windowWidth = useWindowWidth();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    setActiveSlide(0);
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
      <SectionHeader title={title} description={description}>
        <ScrollSlider
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
          totalSlides={totalSlides}
          visibleItems={slides}
        />
      </SectionHeader>
      <div className={styles.sliderWrapper}>
        <ul className={styles.cards} style={{ transform: transform }}>
          {list.map((slide) => {
            return (
              <SliderCard
                key={slide.id}
                id={slide.id}
                src={
                  image
                    ? image.find((item) => item.id === slide.id)?.img
                    : baseURL + slide?.backdrop_path
                }
                name={slide.name}
                cardWidth={cardWidth}
              >
                {footer === "genres" && (
                  <SliderCardCategoriesFooter name={slide.name} />
                )}
                {footer === "topGenres" && (
                  <SliderCardGenresFooter name={slide.name} />
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
                    name={slide.original_title}
                    releaseDate={slide.release_date}
                  />
                )}
                {footer === "mustWatch" && (
                  <SliderCardMustWatchFooter
                    name={slide.original_title}
                    average={slide.vote_average}
                    popularity={parseInt(slide.vote_count)}
                  />
                )}
              </SliderCard>
            );
          })}
        </ul>
      </div>
    </>
  );
};
