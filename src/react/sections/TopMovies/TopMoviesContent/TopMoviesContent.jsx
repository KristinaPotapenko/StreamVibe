import { SectionTitle } from "../../../components/Section/SectionTitle/SectionTitle";
import { Link } from "../../../components/ui/Link/Link";
import { Actions } from "../../../components/Actions/Actions";
import { ActionsItem } from "../../../components/Actions/ActionsItem/ActionsItem";
import styles from "./TopMoviesContent.module.scss";

export const TopMoviesContent = ({ topMovies, activeSlide }) => {
  return (
    <div className={styles.content}>
      <SectionTitle title={topMovies[activeSlide]?.original_title} />
      <p className={styles.description}>{topMovies[activeSlide]?.overview}</p>
      <div className={styles.actions}>
        <Link>
          <svg className="icon">
            <use xlinkHref="/assets/icon/sprite.svg#play" />
          </svg>
          Play Now
        </Link>
        <Actions>
          <ActionsItem accent={true} href="plus" />
          <ActionsItem accent={true} href="like" />
          <ActionsItem accent={true} href="volume" />
        </Actions>
      </div>
    </div>
  );
};
