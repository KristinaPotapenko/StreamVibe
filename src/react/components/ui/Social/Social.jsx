import styles from "./Social.module.scss";

export const Social = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <svg className="icon">
          <use xlinkHref="/assets/icon/sprite.svg#facebook" />
        </svg>
      </li>
      <li className={styles.item}>
        <svg className="icon">
          <use xlinkHref="/assets/icon/sprite.svg#twitter" />
        </svg>
      </li>
      <li className={styles.item}>
        <svg className="icon">
          <use xlinkHref="/assets/icon/sprite.svg#linkedin" />
        </svg>
      </li>
    </ul>
  );
};
