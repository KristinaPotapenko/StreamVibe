import { MediaMain } from "./MediaMain/MediaMain";
import { MediaAside } from "./MediaAside/MediaAside";
import styles from "./MediaInfo.module.scss";

export const MediaInfo = ({ media, isMovie }) => {
  const date = media.release_date ? media.release_date : media?.first_air_date;

  return (
    <section className="section container">
      <div className={styles.wrapper}>
        <MediaMain
          description={media?.overview}
          companies={media?.production_companies}
          isMovie={isMovie}
          seasons={!isMovie ? media?.seasons : null}
        />
        <MediaAside
          year={date.split("-")[0]}
          languages={media?.spoken_languages}
          rating={parseInt(media?.vote_average)}
          gernes={media?.genres}
          director={media?.production_companies?.[0]}
          runtime={media?.runtime}
        />
      </div>
    </section>
  );
};
