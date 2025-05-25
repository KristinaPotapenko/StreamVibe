import styles from "./SectionTitle.module.scss";

export const SectionTitle = ({ title }) => {
  return <h2 className={styles.title}>{title}</h2>;
};
