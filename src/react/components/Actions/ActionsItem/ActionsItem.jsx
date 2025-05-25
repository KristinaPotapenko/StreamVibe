import { Link } from "react-router-dom";
import styles from "./ActionsItem.module.scss";

export const ActionsItem = ({ href }) => {
  return (
    <li className={styles.actionsItem}>
      <Link>
        <svg className="icon">
          <use xlinkHref={`/assets/icon/sprite.svg#${href}`} />
        </svg>
      </Link>
    </li>
  );
};
