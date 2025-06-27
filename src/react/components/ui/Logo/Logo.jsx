import { Link } from "react-router-dom";
import { ROUTES } from "../../../../utils/routes";
import { scrollToTop } from "../../../../scripts/helpers/scrollToTop";
import styles from "./Logo.module.scss";

export const Logo = () => {
  return (
    <Link to={ROUTES.HOME} onClick={scrollToTop} className={styles.logo}>
      <svg className="icon">
        <use
          xlinkHref={`${import.meta.env.BASE_URL}assets/icon/sprite.svg#logo`}
        />
      </svg>
    </Link>
  );
};
