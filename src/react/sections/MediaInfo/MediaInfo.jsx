import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "../../popups/Modal/Modal";
import { SectionTitle } from "../../components/Section/SectionTitle/SectionTitle";
import { MediaMain } from "./MediaMain/MediaMain";
import { MediaAside } from "./MediaAside/MediaAside";
import styles from "./MediaInfo.module.scss";

export const MediaInfo = ({ media, isMovie, showModal, setShowModal }) => {
  const watchlistError = useSelector(({ watchlist }) => watchlist.error);
  const favoriteError = useSelector(({ favorite }) => favorite.error);
  const [errorType, setErrorType] = useState(null);

  useEffect(() => {
    if (watchlistError) {
      setErrorType("watchlist");
      setShowModal(true);
    } else if (favoriteError) {
      setErrorType("favorite");
      setShowModal(true);
    }
  }, [watchlistError, favoriteError]);

  const handleCloseModal = () => {
    setShowModal(false);
    setErrorType(null);
  };

  const date = media.release_date ? media.release_date : media?.first_air_date;

  return (
    <section className="section container">
      {showModal ? (
        <Modal onClose={handleCloseModal}>
          <SectionTitle
            title={
              errorType
                ? `Oops! Failed to update ${errorType}. Please try again.`
                : "Great! Added to your list successfully."
            }
          />
        </Modal>
      ) : (
        <div className={styles.wrapper}>
          <MediaMain
            description={media?.overview}
            companies={media?.production_companies}
            isMovie={isMovie}
            seasons={!isMovie ? media?.seasons : null}
            setShowModal={setShowModal}
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
      )}
    </section>
  );
};
