import { HeroContent } from "./HeroContent/HeroContent";
import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <section className="container">
        <HeroContent />
      </section>
    </div>
  );
};
