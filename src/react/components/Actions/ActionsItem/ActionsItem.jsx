import { Link } from "react-router-dom";
import { ROUTES } from "../../../../utils/routes";
import styles from "./ActionsItem.module.scss";

export const ActionsItem = ({
  type = "link",
  accent,
  href,
  route,
  onClick,
}) => {
  return (
    <li className={`${styles.actionsItem} ${accent ? styles.accent : ""}`}>
      {type === "link" && (
        <Link to={route ? ROUTES[route] : ""} onClick={() => onClick()}>
          <svg className="icon">
            <use xlinkHref={`/assets/icon/sprite.svg#${href}`} />
          </svg>
        </Link>
      )}
      {type === "button" && (
        <button onClick={() => onClick()}>
          {" "}
          <svg className="icon">
            <use xlinkHref={`/assets/icon/sprite.svg#${href}`} />
          </svg>
        </button>
      )}
    </li>
  );
};
