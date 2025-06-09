import { ROUTES } from "../../../utils/routes";
import { getRouteWithId } from "../../../scripts/helpers/getRouteWithId";
import { Link } from "../ui/Link/Link";
import { Actions } from "../Actions/Actions";
import { ActionsItem } from "../Actions/ActionsItem/ActionsItem";
import { SectionTitle } from "../Section/SectionTitle/SectionTitle";
import styles from "./MediaContent.module.scss";

export const MediaContent = ({ media, isMovie }) => {
  return (
    <div className={styles.content}>
      <SectionTitle
        title={
          media.original_title ? media.original_title : media?.original_name
        }
      />
      <p className={styles.description}>{media?.overview}</p>
      <div className={styles.actions}>
        <Link
          to={getRouteWithId(
            isMovie ? ROUTES.MOVIE_DETAILS : ROUTES.TV_DETAILS,
            media?.id
          )}
        >
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
