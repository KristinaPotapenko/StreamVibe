import { useState } from "react";
import { NavigationMenu } from "../../ui/NavigationMenu/NavigationMenu";
import { Actions } from "../../Actions/Actions";
import { Logo } from "../../ui/Logo/Logo";
import { useNoScroll } from "../../../../scripts/hook/useNoScroll";
import styles from "./Header.module.scss";
import { ActionsItem } from "../../Actions/ActionsItem/ActionsItem";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  useNoScroll(isOpen);

  const handleChangeOpen = (isOpen = false) => {
    setIsOpen(isOpen);
  };

  return (
    <header className={styles.header}>
      <section className="container">
        <Logo />
        <div className={`${styles.links} ${isOpen ? styles.isActive : ""}`}>
          <NavigationMenu onClick={handleChangeOpen} />
          <Actions>
            <ActionsItem
              onClick={handleChangeOpen}
              href="search"
              route="SEARCH"
            />
            <ActionsItem
              onClick={handleChangeOpen}
              href="support"
              route="SUPPORT"
            />
          </Actions>
          <button onClick={() => setIsOpen()} className={styles.closeButton}>
            <svg className="icon">
              <use
                xlinkHref={`${
                  import.meta.env.BASE_URL
                }assets/icon/sprite.svg#close`}
              />
            </svg>
          </button>
        </div>
        <button onClick={() => setIsOpen(true)} className={styles.burgerButton}>
          <svg className="icon">
            <use
              xlinkHref={`${
                import.meta.env.BASE_URL
              }assets/icon/sprite.svg#burger`}
            />
          </svg>
        </button>
      </section>
    </header>
  );
};
