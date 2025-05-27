import { ActionsItem } from "./ActionsItem/ActionsItem";
import styles from "./Actions.module.scss";

export const Actions = ({ ...props }) => {
  return (
    <ul className={styles.actions}>
      <ActionsItem {...props} href="search" />
      <ActionsItem {...props} href="support" />
    </ul>
  );
};
