import { ROUTES } from "../../../../utils/routes";
import { NavigationItem } from "./NavigationItem/NavigationItem";
import styles from "./NavigationMenu.module.scss";

export const NavigationMenu = ({ ...props }) => {
  return (
    <nav>
      <ul className={styles.nav}>
        <NavigationItem {...props} to={ROUTES.HOME}>
          Home
        </NavigationItem>
        <NavigationItem {...props} to={ROUTES.BROWSE}>
          Movies & Shows
        </NavigationItem>
        <NavigationItem {...props} to={ROUTES.SUPPORT}>
          Support
        </NavigationItem>
        <NavigationItem {...props} to={ROUTES.SUBSCRIPTIONS}>
          Subscriptions
        </NavigationItem>
      </ul>
    </nav>
  );
};
