import styles from "./SliderButton.module.scss";

export const SliderButton = ({ isRight, onClick }) => {
  return (
    <button
      className={`${styles.sliderButton} ${isRight && styles.isRight}`}
      type="button"
      onClick={onClick}
    >
      <svg className="icon">
        <use xlinkHref="/assets/icon/sprite.svg#arrow" />
      </svg>
    </button>
  );
};
