import { SupportForm } from "./SupportForm/SupportForm";
import { SupportInfo } from "./SupportInfo/SupportInfo";
import styles from "./SupportContact.module.scss";

export const SupportContact = ({ isFirstSection = false }) => {
  return (
    <section
      id="support"
      className={`section container ${isFirstSection ? "first-section" : ""} ${
        styles.section
      }`}
    >
      <SupportInfo />
      <SupportForm />
    </section>
  );
};
