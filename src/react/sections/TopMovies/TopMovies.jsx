import { useDispatch, useSelector } from "react-redux";
import { Actions } from "../../components/Actions/Actions";
import { ActionsItem } from "../../components/Actions/ActionsItem/ActionsItem";
import { SectionTitle } from "../../components/Section/SectionTitle/SectionTitle";
import { ScrollSlider } from "../../components/Slider/ScrollSlider/ScrollSlider";
import { Link } from "../../components/ui/Link/Link";
import { useEffect, useState } from "react";
import { getTopMovies } from "../../../features/topRatedMovies/topMoviesReducerSlice";
import styles from "./TopMovies.module.scss";

export const TopMovies = () => {
  const dispatch = useDispatch();
  const { topMovies } = useSelector(({ topMovies }) => topMovies);
  const [activeSlide, setActiveSlide] = useState(0);

  const baseURL = `https://image.tmdb.org/t/p/w500/`;

  useEffect(() => {
    dispatch(getTopMovies());
  }, [dispatch]);

  return (
    <section className={`section container ${styles.section}`}>
      <div
        key={topMovies[activeSlide]?.id}
        className={styles.sliderBg}
        style={{
          backgroundImage: `linear-gradient(0deg,rgba(0, 0, 0, 1) 16%, rgba(20, 20, 20, 0.26) 100%), url(${baseURL}${topMovies[activeSlide]?.backdrop_path})`,
        }}
      >
        <div className={styles.slider}>
          <div className={styles.content}>
            <SectionTitle title={topMovies[activeSlide]?.original_title} />
            <p className={styles.description}>
              {topMovies[activeSlide]?.overview}
            </p>
            <div className={styles.actions}>
              <Link>
                <svg className="icon">
                  <use xlinkHref="/assets/icon/sprite.svg#play" />
                </svg>
                Play Now
              </Link>
              <Actions>
                <ActionsItem accent={true} href="plus" />
                <ActionsItem accent={true} href="like" />
                <ActionsItem accent={true} href="volume" />
              </Actions>
            </div>
          </div>
          <ScrollSlider
            transparent={true}
            totalSlides={topMovies.length}
            visibleItems={1}
            activeSlide={activeSlide}
            setActiveSlide={setActiveSlide}
          />
        </div>
      </div>
    </section>
  );
};
