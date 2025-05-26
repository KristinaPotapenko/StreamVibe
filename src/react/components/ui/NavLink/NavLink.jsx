import { NavLink as RouterNavLink } from "react-router-dom";
import styles from "./NavLink.module.scss";

export const NavLink = ({ children, ...props }) => {
  return (
    <RouterNavLink
      className={({ isActive }) =>
        isActive ? `${styles.link} ${styles.active}` : styles.link
      }
      {...props}
    >
      {children}
    </RouterNavLink>
  );
};
