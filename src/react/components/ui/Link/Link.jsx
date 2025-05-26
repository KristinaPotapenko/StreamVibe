import { Link as RouterLink } from "react-router-dom";
import styles from "./Link.module.scss";

export const Link = ({ isDark = false, children, ...props }) => {
  return (
    <RouterLink
      className={`${styles.link} ${isDark && styles.isDark}`}
      {...props}
    >
      {children}
    </RouterLink>
  );
};
