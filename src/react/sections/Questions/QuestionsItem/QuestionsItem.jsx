import { useEffect, useRef } from "react";
import styles from "./QuestionsItem.module.scss";

export const QuestionsItem = ({
  id,
  title,
  description,
  activeQuestion,
  onClick,
}) => {
  const number = Number(id) < 10 && "0" + id;
  const descriptionRef = useRef(null);

  useEffect(() => {
    const updateHeight = () => {
      if (descriptionRef.current && activeQuestion === id) {
        const height = descriptionRef.current.scrollHeight;
        descriptionRef.current.style.setProperty("--max-height", `${height}px`);
      }
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [activeQuestion, id, description]);

  return (
    <li
      className={`${styles.item} ${
        activeQuestion === id && styles.questionActive
      }`}
    >
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <div className={styles.numberWrapper}>
            <p className={styles.number}>{number}</p>
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>{title}</h3>
            <p
              className={styles.description}
              ref={descriptionRef}
              style={activeQuestion !== id ? { "--max-height": "0" } : {}}
            >
              {description}
            </p>
          </div>
        </div>
        <button
          className={styles.button}
          type="button"
          onClick={() => onClick(id)}
        ></button>
      </div>
      <hr
        className={`${styles.separator} ${
          activeQuestion === id ? styles.hidden : ""
        }`}
      />
    </li>
  );
};
