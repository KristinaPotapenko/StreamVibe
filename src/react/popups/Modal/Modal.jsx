import styles from "./Modal.module.scss";

export const Modal = ({ setShowModal, children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <button onClick={() => setShowModal(false)}>
          <svg className="icon">
            <use xlinkHref="/assets/icon/sprite.svg#close" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};
