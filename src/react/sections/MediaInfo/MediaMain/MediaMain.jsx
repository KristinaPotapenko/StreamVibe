import { baseImageURL, FALLBACK_IMAGE } from "../../../../utils/constants";
import { MediaBlock } from "../MediaBlocks/MediaBlock";
import { SeasonItem } from "../MediaBlocks/SeasonItem/SeasonItem";
import { Reviews } from "../../../components/Reviews/Reviews";
import { Button } from "../../../components/ui/Button/Button";
import styles from ".././MediaInfo.module.scss";

export const MediaMain = ({ description, companies, isMovie, seasons }) => {
  return (
    <div className={styles.infoWrapper}>
      {!isMovie && (
        <MediaBlock subtitle="Seasons and Episodes">
          <ul className={styles.seasons}>
            {seasons.map((season) => {
              return <SeasonItem key={season.id} season={season} />;
            })}
          </ul>
        </MediaBlock>
      )}
      <MediaBlock subtitle="Description">
        <p className={styles.description}>{description}</p>
      </MediaBlock>
      {companies.length > 0 && (
        <MediaBlock subtitle="Companies">
          <div className={styles.infoContent}>
            {companies.map((companie) => (
              <img
                key={companie.id}
                className={styles.image}
                src={`${
                  companie.logo_path
                    ? baseImageURL + companie.logo_path
                    : FALLBACK_IMAGE
                }`}
                alt={companie.name}
              />
            ))}
          </div>
        </MediaBlock>
      )}
      <MediaBlock
        subtitle="Reviews"
        action={
          <Button isDark={true}>
            <svg className="icon">
              <use xlinkHref="/assets/icon/sprite.svg#plus" />
            </svg>
            Add Your Review
          </Button>
        }
      >
        <Reviews />
      </MediaBlock>
    </div>
  );
};
