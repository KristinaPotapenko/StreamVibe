import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenresMovies } from "../../../features/movies/genresMovies/genresMoviesSlice";
import { Slider } from "../../components/Slider/Slider/Slider";
import { genresMoviesImage } from "./genresMoviesImage";
import styles from "./Categories.module.scss";
import { ROUTES } from "../../../utils/routes";

export const Categories = () => {
  const dispatch = useDispatch();
  const { genresMovies } = useSelector(({ genresMovies }) => genresMovies);

  useEffect(() => {
    dispatch(getGenresMovies());
  }, [dispatch]);

  return (
    <section id="categories" className={`section container ${styles.section}`}>
      <Slider
        route={ROUTES.MOVIES_GENRE}
        title="Explore our wide variety of categories"
        description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
        list={genresMovies}
        image={genresMoviesImage}
        footer="genres"
      />
    </section>
  );
};
