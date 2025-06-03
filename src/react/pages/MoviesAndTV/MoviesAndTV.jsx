import { useState } from "react";
import { Tabs } from "../../components/ui/Tabs/Tabs";
import { Movies } from "../../sections/Movies/Movies";
import { TopMovies } from "../../sections/TopMovies/TopMovies";
import { TV } from "../../sections/TV/TV";
import { useWindowWidth } from "../../../scripts/hook/useWindowWidth";
import styles from "./MoviesAndTV.module.scss";

export const MoviesAndTV = () => {
  const [activeTabs, setActiveTabs] = useState(0);
  const windowWidth = useWindowWidth();

  const isMobile = windowWidth < 768;
  const isDesktop = windowWidth >= 768;

  return (
    <>
      <TopMovies />
      {isMobile && (
        <>
          <Tabs
            tabs={["Movies", "Shows"]}
            activeTabs={activeTabs}
            setActiveTabs={setActiveTabs}
          />
          <div className={styles.tabsContent}>
            <div
              className={`${styles.tabPanel} ${
                activeTabs === 0 ? styles.active : ""
              }`}
            >
              <Movies />
            </div>
            <div
              className={`${styles.tabPanel} ${
                activeTabs === 1 ? styles.active : ""
              }`}
            >
              <TV />
            </div>
          </div>
        </>
      )}
      {isDesktop && (
        <>
          <Movies />
          <TV />
        </>
      )}
    </>
  );
};
