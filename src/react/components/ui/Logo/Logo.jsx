import { Link } from "react-router-dom";
import { ROUTES } from "../../../../utils/routes";
import styles from "./Logo.module.scss";

export const Logo = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Link to={ROUTES.HOME} onClick={handleClick} className={styles.logo}>
      <svg className="icon">
        <use xlinkHref="/assets/icon/sprite.svg#logo" />
      </svg>
    </Link>
  );
};
