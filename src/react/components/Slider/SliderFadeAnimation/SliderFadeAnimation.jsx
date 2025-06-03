import { useEffect, useState } from "react";
import styles from "./SliderFadeAnimation.module.scss";

export const SliderFadeAnimation = ({ activeSlide, children }) => {
  const [animationState, setAnimationState] = useState("entering");

  useEffect(() => {
    setAnimationState("entering");
    const timeout = setTimeout(() => setAnimationState("entered"), 500);
    return () => clearTimeout(timeout);
  }, [activeSlide]);

  return (
    <div className={`${styles.fadeWrapper} ${styles[animationState]}`}>
      {children}
    </div>
  );
};
