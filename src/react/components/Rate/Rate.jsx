import styles from "./Rate.module.scss";

export const Rate = ({ average }) => {
  const rate = (Number(average) / 2).toFixed(2);
  const fullStars = Math.floor(rate) - 1;
  const partial = Math.ceil((rate - (fullStars + 1)) * 100);
  const emptyStars = Math.ceil(rate);

  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => {
        if (index + 1 <= fullStars) {
          return (
            <svg key={index} className={`${styles.full} icon`}>
              <use xlinkHref="/assets/icon/sprite.svg#star" />
            </svg>
          );
        } else if (index + 1 >= fullStars && index + 1 < emptyStars) {
          return (
            <div key={index} className={styles.icon}>
              <svg className={`${styles.empty} icon`}>
                <use xlinkHref="/assets/icon/sprite.svg#star" />
              </svg>
              <div className={styles.partial} style={{ width: `${partial}%` }}>
                <svg className="icon">
                  <use xlinkHref="/assets/icon/sprite.svg#star" />
                </svg>
              </div>
            </div>
          );
        } else if (index + 1 <= 5) {
          return (
            <svg key={index} className={`${styles.empty} icon`}>
              <use xlinkHref="/assets/icon/sprite.svg#star" />
            </svg>
          );
        }
      })}
    </>
  );
};
