import { HeroContent } from "./HeroContent/HeroContent";
import { Link } from "react-router-dom";
import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <Link to="/movies-tv" className={styles.play} />
      <section className="container">
        <HeroContent />
      </section>
    </div>
  );
};
