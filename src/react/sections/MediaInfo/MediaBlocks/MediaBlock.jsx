import styles from "../MediaInfo.module.scss";

export const MediaBlock = ({ subtitle, children, action }) => {
  return (
    <div className={styles.infoBlock}>
      <div className={styles.infoHeader}>
        <p className={styles.subtitle}>{subtitle}</p>
        {action}
      </div>
      {children}
    </div>
  );
};
