import { SectionHeaderContent } from "./SectionHeaderContent/SectionHeaderContent";
import styles from "./SectionHeader.module.scss";

export const SectionHeader = ({ title, description, children }) => {
  return (
    <div className={styles.wrapper}>
      <SectionHeaderContent title={title} description={description} />
      {children}
    </div>
  );
};
