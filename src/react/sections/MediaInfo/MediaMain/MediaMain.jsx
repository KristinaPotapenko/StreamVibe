import { useState } from "react";
import { baseImageURL, FALLBACK_IMAGE } from "../../../../utils/constants";
import { MediaBlock } from "../MediaBlocks/MediaBlock";
import { MediaItem } from "../MediaBlocks/MediaItem/MediaItem";
import { ReviewsForm } from "../../../components/Reviews/ReviewsForm/ReviewsForm";
import { Reviews } from "../../../components/Reviews/Reviews";
import { Button } from "../../../components/ui/Button/Button";
import styles from ".././MediaInfo.module.scss";

export const MediaMain = ({ description, companies, isMovie, seasons }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && <ReviewsForm setShowModal={setShowModal} />}
      <div className={styles.infoWrapper}>
        {!isMovie && (
          <MediaBlock subtitle="Seasons and Episodes">
            <ul className={styles.medias}>
              {seasons.map((season, index) => {
                return (
                  <MediaItem
                    key={season.id}
                    media={season}
                    isSeason={true}
                    index={index}
                  />
                );
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
            <Button isDark={true} onClick={() => setShowModal((prev) => !prev)}>
              <svg className="icon">
                <use
                  xlinkHref={`${
                    import.meta.env.BASE_URL
                  }assets/icon/sprite.svg#plus`}
                />
              </svg>
              Add Your Review
            </Button>
          }
        >
          <Reviews />
        </MediaBlock>
      </div>
    </>
  );
};
