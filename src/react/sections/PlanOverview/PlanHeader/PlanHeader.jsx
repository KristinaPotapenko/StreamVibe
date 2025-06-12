import styles from "./PlanHeader.module.scss";

export const PlanHeader = () => {
  return (
    <>
      <p className={styles.title}>Features</p>
      <p className={styles.title}>Basic</p>
      <p className={styles.title}>
        Standard<span className={styles.popular}>Popular</span>
      </p>
      <p className={styles.title}>Premium</p>
    </>
  );
};
