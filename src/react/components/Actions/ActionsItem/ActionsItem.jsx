import { Link } from "react-router-dom";
import { ROUTES } from "../../../../utils/routes";
import styles from "./ActionsItem.module.scss";

export const ActionsItem = ({ href, onClick }) => {
  return (
    <li className={styles.actionsItem}>
      <Link to={ROUTES.SUPPORT} onClick={() => onClick()}>
        <svg className="icon">
          <use xlinkHref={`/assets/icon/sprite.svg#${href}`} />
        </svg>
      </Link>
    </li>
  );
};
