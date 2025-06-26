import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useWindowWidth } from "../../../scripts/hook/useWindowWidth";
import { useMediaActionStatus } from "../../../scripts/hook/useMediaActionStatus";
import { useNoScroll } from "../../../scripts/hook/useNoScroll";
import { TopMovies } from "../../sections/TopMovies/TopMovies";
import { Tabs } from "../../components/ui/Tabs/Tabs";
import { BrowseMovies } from "../../sections/BrowseMovies/BrowseMovies";
import { BrowseTV } from "../../sections/BrowseTV/BrowseTV";
import { Modal } from "../../popups/Modal/Modal";
import { SectionTitle } from "../../components/Section/SectionTitle/SectionTitle";
import styles from "./MoviesAndTV.module.scss";

export const MoviesAndTV = () => {
  const location = useLocation();
  const [activeTabs, setActiveTabs] = useState(0);
  const windowWidth = useWindowWidth();

  const isMobile = windowWidth < 768;
  const isDesktop = windowWidth >= 768;

  const [showModal, setShowModal] = useState(false);

  const accountType = localStorage.getItem("accountType");

  const { message, error, handleCloseModal } =
    useMediaActionStatus(setShowModal);

  useNoScroll(showModal);

  useEffect(() => {
    if (location.hash.includes("tv")) {
      setActiveTabs(1);
    } else {
      setActiveTabs(0);
    }
  }, [location.hash]);

  return (
    <>
      {showModal && accountType === "user" && (
        <Modal onClose={handleCloseModal}>
          <SectionTitle
            title={
              error
                ? "Oops! Failed to update. Please try again."
                : message === "Success."
                ? "Great! Added to your list successfully."
                : message
            }
          />
        </Modal>
      )}

      <TopMovies isFirstSection={true} setShowModal={setShowModal} />

      {isMobile && (
        <section className="section container">
          <Tabs
            tabs={["Movies", "TV"]}
            activeTabs={activeTabs}
            setActiveTabs={setActiveTabs}
          />
          <div className={styles.tabsContent}>
            <div
              className={`${styles.tabPanel} ${
                activeTabs === 0 ? styles.active : ""
              }`}
            >
              <BrowseMovies />
            </div>
            <div
              className={`${styles.tabPanel} ${
                activeTabs === 1 ? styles.active : ""
              }`}
            >
              <BrowseTV />
            </div>
          </div>
        </section>
      )}

      {isDesktop && (
        <>
          <BrowseMovies />
          <BrowseTV />
        </>
      )}
    </>
  );
};
