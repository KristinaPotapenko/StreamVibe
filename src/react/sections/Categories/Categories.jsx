import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../features/categories/categoriesSlice";
import { SectionHeader } from "../../components/Section/SectionHeader/sectionHeader";
import { ScrollSlider } from "../../components/Slider/ScrollSlider/ScrollSlider";
import { CategoriesList } from "./CategoriesList/CategoriesList";
import { useWindowWidth } from "../../../scripts/hook/useWindowWidth";
import styles from "./Categories.module.scss";

export const Categories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector(({ categoriesList }) => categoriesList);
  const [activeSlide, setActiveSlide] = useState(0);
  const windowWidth = useWindowWidth();

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

  const totalSlides = Math.ceil(categories.length / slides);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <section className={`section container ${styles.section}`}>
      <SectionHeader
        title="Explore our wide variety of categories"
        description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
      >
        <ScrollSlider
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
          totalSlides={totalSlides}
          visibleItems={slides}
        />
      </SectionHeader>

      <CategoriesList
        categories={categories}
        cardWidth={cardWidth}
        transform={transform}
      />
    </section>
  );
};
