import { scrollToTop } from "../../../../scripts/helpers/scrollToTop";
import { ROUTES } from "../../../../utils/routes";
import { Link } from "../../../components/ui/Link/Link";
import styles from "./HeroContent.module.scss";

export const HeroContent = () => {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>The Best Streaming Experience</h1>
      <p className={styles.description}>
        StreamVibe is the best streaming experience for watching your favorite
        movies and shows on demand, anytime, anywhere. With StreamVibe, you can
        enjoy a wide variety of content, including the latest blockbusters,
        classic movies, popular TV shows, and more. You can also create your own
        watchlists, so you can easily find the content you want to watch.
      </p>
      <Link to={ROUTES.BROWSE} onClick={scrollToTop}>
        <svg className="icon">
          <use xlinkHref="assets/icon/sprite.svg#play" />
        </svg>
        Start Watching Now
      </Link>
    </div>
  );
};
