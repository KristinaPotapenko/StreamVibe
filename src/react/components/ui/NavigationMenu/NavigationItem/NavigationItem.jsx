import { Link } from "../../Link/Link";

export const NavigationItem = ({ children, ...props }) => {
  return (
    <li>
      <Link {...props}>{children}</Link>
    </li>
  );
};
