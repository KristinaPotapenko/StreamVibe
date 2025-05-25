import { NavLink } from "react-router-dom";
import styles from "./Link.module.scss";

export const Link = ({ children, ...props }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? `${styles.link} ${styles.active}` : styles.link
      }
      {...props}
    >
      {children}
    </NavLink>
  );
};
