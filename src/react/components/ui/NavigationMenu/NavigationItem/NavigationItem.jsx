import { NavLink } from "../../NavLink/NavLink";

export const NavigationItem = ({ children, ...props }) => {
  return (
    <li>
      <NavLink {...props}>{children}</NavLink>
    </li>
  );
};
