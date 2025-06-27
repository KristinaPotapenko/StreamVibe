import styles from "./Social.module.scss";

export const Social = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="icon">
            <use
              xlinkHref={`${
                import.meta.env.BASE_URL
              }assets/icon/sprite.svg#facebook`}
            />
          </svg>
        </a>
      </li>
      <li className={styles.item}>
        <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
          <svg className="icon">
            <use
              xlinkHref={`${
                import.meta.env.BASE_URL
              }assets/icon/sprite.svg#twitter`}
            />
          </svg>
        </a>
      </li>
      <li className={styles.item}>
        <a
          href="https://ua.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="icon">
            <use
              xlinkHref={`${
                import.meta.env.BASE_URL
              }assets/icon/sprite.svg#linkedin`}
            />
          </svg>
        </a>
      </li>
    </ul>
  );
};
