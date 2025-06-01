import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../features/categories/categoriesSlice";
import { Slider } from "../../components/Slider/Slider/Slider";
import { categoriesImage } from "./categoriesImage";
import styles from "./Categories.module.scss";

export const Categories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector(({ categoriesList }) => categoriesList);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <section className={`section container ${styles.section}`}>
      <Slider
        title="Explore our wide variety of categories"
        description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
        list={categories}
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
        categoriesImage={categoriesImage}
        footer="categories"
      />
    </section>
  );
};
