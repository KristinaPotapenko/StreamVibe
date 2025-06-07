import { ROUTES } from "../../../utils/routes";
import { getRouteWithId } from "../../../scripts/helpers/getRouteWithId";
import { Link } from "../ui/Link/Link";
import { Actions } from "../Actions/Actions";
import { ActionsItem } from "../Actions/ActionsItem/ActionsItem";
import { SectionTitle } from "../Section/SectionTitle/SectionTitle";
import styles from "./MediaContent.module.scss";

export const MediaContent = ({ media, activeSlide }) => {
  const movie = Array.isArray(media) ? media[activeSlide] : media;

  return (
    <div className={styles.content}>
      <SectionTitle
        title={
          movie.original_title ? movie.original_title : movie?.original_name
        }
      />
      <p className={styles.description}>{movie?.overview}</p>
      <div className={styles.actions}>
        <Link to={getRouteWithId(ROUTES.MOVIE_DETAILS, movie?.id)}>
          <svg className="icon">
            <use xlinkHref="/assets/icon/sprite.svg#play" />
          </svg>
          Play Now
        </Link>
        <Actions>
          <ActionsItem type="button" accent={true} href="plus" />
          <ActionsItem type="button" accent={true} href="like" />
          <ActionsItem type="button" accent={true} href="volume" />
        </Actions>
      </div>
    </div>
  );
};
