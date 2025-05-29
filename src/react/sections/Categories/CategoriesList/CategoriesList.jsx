import { CategoriesCard } from "../../../components/card/CategoriesCard/CategoriesCard";
import { categoriesImage } from "../categoriesImage";
import styles from "./CategoriesList.module.scss";

export const CategoriesList = ({ categories, cardWidth, transform }) => {
  return (
    <div className={styles.sliderWrapper}>
      <ul className={styles.cards} style={{ transform: transform }}>
        {categories.map((category) => {
          return (
            <CategoriesCard
              key={category.name}
              id={category.id}
              src={categoriesImage.find((item) => item.id === category.id)?.img}
              name={category.name}
              cardWidth={cardWidth}
            />
          );
        })}
      </ul>
    </div>
  );
};
