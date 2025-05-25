import { ActionsItem } from "./ActionsItem/ActionsItem";
import styles from "./Actions.module.scss";

export const Actions = () => {
  return (
    <ul className={styles.actions}>
      <ActionsItem href="search" />
      <ActionsItem href="support" />
    </ul>
  );
};
