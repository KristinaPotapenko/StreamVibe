import styles from "./SliderButton.module.scss";

export const SliderButton = ({ isRight, onClick, isGray }) => {
  return (
    <button
      className={`${styles.sliderButton} ${isRight && styles.isRight} ${
        isGray && styles.isGray
      }`}
      type="button"
      onClick={onClick}
    >
      <svg className="icon">
        <use xlinkHref="/assets/icon/sprite.svg#arrow" />
      </svg>
    </button>
  );
};
