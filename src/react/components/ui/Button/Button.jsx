import styles from "./Button.module.scss";

export const Button = ({ isDark = false, children, ...props }) => {
  return (
    <button
      className={`${styles.button} ${isDark ? styles.isDark : ""}`}
      {...props}
    >
      {children}
    </button>
  );
};
