import styles from "../../inputs/Input/Input.module.scss";

export const Textarea = (props) => {
  return (
    <textarea className={`${styles.input} ${styles.textarea}`} {...props} />
  );
};
