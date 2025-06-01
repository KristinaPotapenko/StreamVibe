import styles from "./SectionSliders.module.scss";

export const SectionSliders = ({ name, children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blockName}>
        <p>{name}</p>
      </div>
      {children}
    </div>
  );
};
