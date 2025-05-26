import { HeroContent } from "./HeroContent/HeroContent";
import styles from "./Hero.module.scss";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <Link className={styles.play} />
      <section className="container">
        <HeroContent />
      </section>
    </div>
  );
};
