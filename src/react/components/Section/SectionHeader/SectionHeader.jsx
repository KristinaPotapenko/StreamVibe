import { SectionHeaderContent } from "./SectionHeaderContent/SectionHeaderContent";
import styles from "./SectionHeader.module.scss";

export const SectionHeader = ({ id, title, description, children }) => {
  return (
    <div id={id} className={styles.wrapper}>
      <SectionHeaderContent title={title} description={description} />
      {children}
    </div>
  );
};
