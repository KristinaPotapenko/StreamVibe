import { SectionTitle } from "../../../components/Section/SectionTitle/SectionTitle";
import medias from "../../../../assets/home-bg.jpg";
import styles from "./SupportInfo.module.scss";

export const SupportInfo = () => {
  return (
    <div className={styles.wrapper}>
      <SectionTitle title="Welcome to our support page!" />
      <p className={styles.description}>
        We're here to help you with any problems you may be having with our
        product.
      </p>
      <img className={styles.image} src={medias} alt="Medias" />
    </div>
  );
};
