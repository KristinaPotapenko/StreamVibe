import styles from "./QuestionsItem.module.scss";

export const QuestionsItem = ({
  id,
  title,
  description,
  activeQuestion,
  onClick,
}) => {
  const number = Number(id) < 10 && "0" + id;

  return (
    <li
      className={`${styles.wrapper} ${
        activeQuestion === id && styles.questionActive
      }`}
    >
      <div className={styles.inner}>
        <div className={styles.numberWrapper}>
          <p className={styles.number}>{number}</p>
        </div>

        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
      <button
        className={styles.button}
        type="button"
        onClick={() => onClick(id)}
      ></button>
    </li>
  );
};
