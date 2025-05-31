import styles from "./Actions.module.scss";

export const Actions = ({ children }) => {
  return <ul className={styles.actions}>{children}</ul>;
};
