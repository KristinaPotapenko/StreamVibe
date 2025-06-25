import { useMediaActionStatus } from "../../../scripts/hook/useMediaActionStatus";
import { Modal } from "../../popups/Modal/Modal";
import { SectionTitle } from "../../components/Section/SectionTitle/SectionTitle";
import { MediaMain } from "./MediaMain/MediaMain";
import { MediaAside } from "./MediaAside/MediaAside";
import styles from "./MediaInfo.module.scss";

export const MediaInfo = ({ media, isMovie, showModal, setShowModal }) => {
  const { message, errorType, handleCloseModal } =
    useMediaActionStatus(setShowModal);

  const date = media.release_date ? media.release_date : media?.first_air_date;

  return (
    <section className="section container">
      {showModal ? (
        <Modal onClose={handleCloseModal}>
          <SectionTitle
            title={
              errorType
                ? `Oops! Failed to update ${errorType}. Please try again.`
                : message === "Success."
                ? "Great! Added to your list successfully."
                : message
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
