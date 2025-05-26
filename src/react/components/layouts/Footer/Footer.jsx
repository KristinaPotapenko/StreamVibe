import { Link } from "../../ui/Link/Link";
import { Social } from "../../ui/Social/Social";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`container ${styles.wrapper}`}>
        <ul className={styles.nav}>
          <li className={styles.item}>
            <Link className={styles.heading}>Home</Link>
            <Link className={styles.link}>Categories</Link>
            <Link className={styles.link}>Devices</Link>
            <Link className={styles.link}>Pricing</Link>
            <Link className={styles.link}>FAQ</Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.heading}>Movies</Link>
            <Link className={styles.link}>Gernes</Link>
            <Link className={styles.link}>Trending</Link>
            <Link className={styles.link}>New Release</Link>
            <Link className={styles.link}>Popular</Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.heading}>Shows</Link>
            <Link className={styles.link}>Gernes</Link>
            <Link className={styles.link}>Trending</Link>
            <Link className={styles.link}>New Release</Link>
            <Link className={styles.link}>Popular</Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.heading}>Support</Link>
            <Link className={styles.link}>Contact Us</Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.heading}>Subscription</Link>
            <Link className={styles.link}>Plans</Link>
            <Link className={styles.link}>Features</Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.heading}>Connect With Us</Link>
            <Social />
          </li>
        </ul>
        <div className={styles.copyrightBlock}>
          <p>@2023 streamvib, All Rights Reserved</p>
          <div className={styles.privacyBlock}>
            <Link className={styles.link}>Terms of Use</Link>
            <Link className={styles.link}>Privacy Policy</Link>
            <Link className={styles.link}>Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
