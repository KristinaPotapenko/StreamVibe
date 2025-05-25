import { NavigationMenu } from "../../ui/NavigationMenu/NavigationMenu";
import { Actions } from "../../Actions/Actions";
import { Logo } from "../../ui/Logo/Logo";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <section className="container">
      <header className={styles.header}>
        <Logo />
        <NavigationMenu />
        <Actions />
      </header>
    </section>
  );
};
