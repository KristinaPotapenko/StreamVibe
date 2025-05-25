import { ROUTES } from "../../../../utils/routes";
import { NavigationItem } from "./NavigationItem/NavigationItem";
import styles from "./NavigationMenu.module.scss";

export const NavigationMenu = () => {
  return (
    <nav>
      <ul className={styles.nav}>
        <NavigationItem to={ROUTES.HOME}>Home</NavigationItem>
        <NavigationItem to={ROUTES.MOVIES_TV}>Movies & Shows</NavigationItem>
        <NavigationItem to={ROUTES.SUPPORT}>Support</NavigationItem>
        <NavigationItem to={ROUTES.SUBSCRIPTIONS}>Subscriptions</NavigationItem>
      </ul>
    </nav>
  );
};
