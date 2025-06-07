import { Link } from "react-router-dom";
import { ROUTES } from "../../../utils/routes";
import { HeroContent } from "./HeroContent/HeroContent";
import { scrollToTop } from "../../../scripts/helpers/scrollToTop";
import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <Link to={ROUTES.BROWSE} onClick={scrollToTop} className={styles.play} />
      <section className="container">
        <HeroContent />
      </section>
    </div>
  );
};
