import styles from "./Tabs.module.scss";

export const Tabs = ({ children }) => {
  return <ul className={styles.tabs}>{children}</ul>;
};
