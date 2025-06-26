import { useEffect, useState } from "react";
import { ROUTES } from "../../../../utils/routes";
import { scrollToTop } from "../../../../scripts/helpers/scrollToTop";
import { Link } from "../../ui/Link/Link";
import styles from "./PricingCard.module.scss";

export const PricingCard = ({ title, description, price, activeTabs }) => {
  const [displayPrice, setDisplayPrice] = useState(price);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      const newPrice =
        activeTabs === 1
          ? (price * 12 - (price * 12 * 10) / 100).toFixed(2)
          : price;
      setDisplayPrice(newPrice);
      setIsAnimating(false);
    }, 250);

    return () => clearTimeout(timer);
  }, [activeTabs, price]);

  return (
    <li className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      <div className={styles.priceBlock}>
        <div
          className={`${styles.priceContainer} ${
            isAnimating ? styles.animating : ""
          }`}
        >
          <p className={styles.price}>${displayPrice}</p>
          <p className={styles.period}>
            {activeTabs === 0 ? "/month" : "/year"}
          </p>
        </div>
      </div>
      <div className={styles.buttons}>
        <Link isDark={true} to={ROUTES.SUBSCRIPTIONS} onClick={scrollToTop}>
          Start Free Trial
        </Link>
        <Link to={ROUTES.SUBSCRIPTIONS} onClick={scrollToTop}>
          Choose Plan
        </Link>
      </div>
    </li>
  );
};
