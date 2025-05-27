import { useState } from "react";
import { NavigationMenu } from "../../ui/NavigationMenu/NavigationMenu";
import { Actions } from "../../Actions/Actions";
import { Logo } from "../../ui/Logo/Logo";
import { useNoScroll } from "../../../../scripts/hook/useNoScroll";
import styles from "./Header.module.scss";

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
          <Actions onClick={handleChangeOpen} />
          <button onClick={() => setIsOpen()} className={styles.closeButton}>
            <svg className="icon">
              <use xlinkHref="/assets/icon/sprite.svg#close" />
            </svg>
          </button>
        </div>
        <button onClick={() => setIsOpen(true)} className={styles.burgerButton}>
          <svg className="icon">
            <use xlinkHref="/assets/icon/sprite.svg#burger" />
          </svg>
        </button>
      </section>
    </header>
  );
};
