import { NavLink } from "../../NavLink/NavLink";

export const NavigationItem = ({ onClick, children, ...props }) => {
  return (
    <li>
      <NavLink onClick={() => onClick()} {...props}>
        {children}
      </NavLink>
    </li>
  );
};
