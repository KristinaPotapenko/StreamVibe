import { SupportForm } from "./SupportForm/SupportForm";
import { SupportInfo } from "./SupportInfo/SupportInfo";
import styles from "./SupportContact.module.scss";

export const SupportContact = () => {
  return (
    <section className={`section container ${styles.section}`}>
      <SupportInfo />
      <SupportForm />
    </section>
  );
};
