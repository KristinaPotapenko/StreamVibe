import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useWindowWidth } from "../../../scripts/hook/useWindowWidth";
import { TopMovies } from "../../sections/TopMovies/TopMovies";
import { Tabs } from "../../components/ui/Tabs/Tabs";
import { BrowseMovies } from "../../sections/BrowseMovies/BrowseMovies";
import { BrowseTV } from "../../sections/BrowseTV/BrowseTV";
import styles from "./MoviesAndTV.module.scss";

export const MoviesAndTV = () => {
  const location = useLocation();
  const [activeTabs, setActiveTabs] = useState(0);
  const windowWidth = useWindowWidth();

  const isMobile = windowWidth < 768;
  const isDesktop = windowWidth >= 768;

  useEffect(() => {
    if (location.hash.includes("tv")) {
      setActiveTabs(1);
    } else {
      setActiveTabs(0);
    }
  }, [location.hash]);

  return (
    <>
      <TopMovies isFirstSection={true} />
      {isMobile && (
        <section className="section container">
          <>
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
          </>
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
