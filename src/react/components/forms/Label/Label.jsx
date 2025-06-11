import styles from "./Label.module.scss";

export const Label = ({ id, isGray, children }) => {
  return (
    <label
      className={`${styles.label} ${isGray ? styles.isGray : ""}`}
      htmlFor={id}
    >
      {children}
    </label>
  );
};
