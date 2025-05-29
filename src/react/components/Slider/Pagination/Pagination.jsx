import styles from "./Pagination.module.scss";

export const Pagination = ({ slides, visibleItems, activeSlide }) => {
  return (
    <ul className={styles.pagination}>
      {Array.from({ length: slides }).map((_, index) => {
        return (
          <li key={index}>
            <span
              className={`${styles.dot} ${
                (index * visibleItems === activeSlide ||
                  (activeSlide * visibleItems === 0 && index === 0)) &&
                styles.active
              }`}
            ></span>
          </li>
        );
      })}
    </ul>
  );
};
