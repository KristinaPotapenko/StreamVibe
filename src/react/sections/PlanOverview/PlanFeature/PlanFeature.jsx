import React, { useEffect, useState } from "react";
import { descktopconstFeatures, features } from "../features";
import { plans } from "../plans";
import styles from "./PlanFeature.module.scss";

export const PlanFeature = ({ activeTabs, windowWidth }) => {
  const isMobile = windowWidth < 768;

  const [animatingOut, setAnimatingOut] = useState(false);
  const [currentValues, setCurrentValues] = useState(() =>
    isMobile
      ? features.map((f) => plans[activeTabs][f.key])
      : descktopconstFeatures.map((f) => f.values)
  );

  useEffect(() => {
    setAnimatingOut(true);

    const outTimer = setTimeout(() => {
      const updatedValues = isMobile
        ? features.map((f) => plans[activeTabs][f.key])
        : descktopconstFeatures.map((f) => f.values);

      setCurrentValues(updatedValues);
      setAnimatingOut(false);
    }, 250);

    return () => clearTimeout(outTimer);
  }, [activeTabs, isMobile]);

  return (
    <>
      {isMobile
        ? features.map((feature, index) => (
            <div key={feature.key} className={styles.wrapper}>
              <p className={`${styles.text} ${styles.name}`}>{feature.label}</p>
              <div
                className={`${styles.valueContainer} ${
                  animatingOut ? styles.fadeOut : styles.fadeIn
                }`}
              >
                <p className={styles.text}>{currentValues[index]}</p>
              </div>
            </div>
          ))
        : descktopconstFeatures.map((feature) => (
            <React.Fragment key={feature.label}>
              <p className={`${styles.text} ${styles.name}`}>{feature.label}</p>
              {feature.values.map((value, index) => (
                <p key={index} className={styles.text}>
                  {value}
                </p>
              ))}
            </React.Fragment>
          ))}
    </>
  );
};
