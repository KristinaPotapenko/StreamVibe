import styles from "./Modal.module.scss";

export const Modal = ({ onClose, children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <button className={styles.closeButton} onClick={onClose}>
          <svg className="icon">
            <use xlinkHref="/assets/icon/sprite.svg#close" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};
