import { SectionTitle } from "../../SectionTitle/SectionTitle";
import styles from "./SectionHeaderContent.module.scss";

export const SectionHeaderContent = ({ title, description }) => {
  return (
    <div className={styles.wrapper}>
      <SectionTitle title={title} />
      {description && <p>{description}</p>}
    </div>
  );
};
