import { Rate } from "../../Rate/Rate";
import styles from "./ReviewsCard.module.scss";

export const ReviewsCard = ({ cardWidth, comment }) => {
  return (
    <li className={styles.card} style={{ minWidth: cardWidth }}>
      <div className={styles.header}>
        <div className={styles.userInfo}>
          <p className={styles.name}>{comment.name}</p>
          <p className={styles.location}>{comment.location}</p>
        </div>
        <div className={styles.rate}>
          <Rate average={comment.rating} />
        </div>
      </div>
      <p className={styles.description}>{comment.comment}</p>
    </li>
  );
};
