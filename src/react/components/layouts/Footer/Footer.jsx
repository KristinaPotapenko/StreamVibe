import { useEffect } from "react";
import { useLocation } from "react-router";
import { ROUTES } from "../../../../utils/routes";
import { Link } from "../../ui/Link/Link";
import { Social } from "../../ui/Social/Social";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.getElementById(location.hash.slice(1));
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <footer className={`${styles.footer}`}>
      <div className={`container ${styles.wrapper}`}>
        <ul className={styles.nav}>
          <li className={styles.item}>
            <Link
              to={ROUTES.HOME}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={styles.heading}
            >
              Home
            </Link>
            <Link to={`${ROUTES.HOME}#categories`} className={styles.link}>
              Categories
            </Link>
            <Link to={`${ROUTES.HOME}#devices`} className={styles.link}>
              Devices
            </Link>
            <Link to={`${ROUTES.HOME}#questions`} className={styles.link}>
              FAQ
            </Link>
            <Link to={`${ROUTES.HOME}#pricing`} className={styles.link}>
              Pricing
            </Link>
          </li>
          <li className={styles.item}>
            <Link to={`${ROUTES.BROWSE}#movies`} className={styles.heading}>
              Movies
            </Link>
            <Link to={`${ROUTES.BROWSE}#moviesGenres`} className={styles.link}>
              Gernes
            </Link>
            <Link
              to={`${ROUTES.BROWSE}#moviesTrending`}
              className={styles.link}
            >
              Trending
            </Link>
            <Link
              to={`${ROUTES.BROWSE}#moviesNewRealeases`}
              className={styles.link}
            >
              New Release
            </Link>
            <Link
              to={`${ROUTES.BROWSE}#moviesMustWatch`}
              className={styles.link}
            >
              Popular
            </Link>
          </li>
          <li className={styles.item}>
            <Link to={`${ROUTES.BROWSE}#tv`} className={styles.heading}>
              TV
            </Link>
            <Link to={`${ROUTES.BROWSE}#tvGenres`} className={styles.link}>
              Gernes
            </Link>
            <Link to={`${ROUTES.BROWSE}#tvTrending`} className={styles.link}>
              Trending
            </Link>
            <Link to={`${ROUTES.BROWSE}#tvNewReleases`} className={styles.link}>
              New Release
            </Link>
            <Link to={`${ROUTES.BROWSE}#tvMustWatch`} className={styles.link}>
              Popular
            </Link>
          </li>
          <li className={styles.item}>
            <Link to={ROUTES.SUPPORT} className={styles.heading}>
              Support
            </Link>
            <Link className={styles.link}>Contact Us</Link>
          </li>
          <li className={styles.item}>
            <Link to={ROUTES.SUBSCRIPTIONS} className={styles.heading}>
              Subscription
            </Link>
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
