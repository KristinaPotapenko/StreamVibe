import { useNoScroll } from "../../../scripts/hook/useNoScroll";
import styles from "./Loader.module.scss";

export const Loader = () => {
  useNoScroll(true);

  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <div className={styles.outer}>
          <div className={styles.inner + " " + styles.tl}></div>
          <div className={styles.inner + " " + styles.tr}></div>
          <div className={styles.inner + " " + styles.br}></div>
          <div className={styles.inner + " " + styles.bl}></div>
        </div>
      </div>
    </div>
  );
};
