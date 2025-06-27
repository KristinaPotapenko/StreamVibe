import { ROUTES } from "../../../utils/routes";
import { Link } from "../../components/ui/Link/Link";

import img404 from "../../../assets/404-image.png";

import styles from "./NotFound.module.scss";

export const NotFound = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={img404} alt="Red monster" />
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.text}>
          Looks like this page went into post-production...
        </p>
        <p className={styles.text}>
          We couldn’t find the movie or show you were looking for. Check the URL
          or return to the homepage.
        </p>
        <Link to={ROUTES.HOME}> Back to homepage</Link>
      </div>
    </div>
  );
};
