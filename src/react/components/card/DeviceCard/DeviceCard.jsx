import styles from "./DeviceCard.module.scss";

export const DeviceCard = ({ src, title, description }) => {
  return (
    <li className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.icon}>
          <svg className="icon">
            <use xlinkHref={src} />
          </svg>
        </div>

        <h3 className={styles.title}>{title}</h3>
      </div>
      <p className={styles.description}>{description}</p>
    </li>
  );
};
