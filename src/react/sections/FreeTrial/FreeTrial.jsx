import { SectionHeader } from "../../components/Section/SectionHeader/sectionHeader";
import { Link } from "../../components/ui/Link/Link";
import styles from "./FreeTrial.module.scss";

export const FreeTrial = () => {
  return (
    <section className="section container">
      <div className={styles.section}>
        <SectionHeader
          title="Start your free trial today!"
          description="This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe."
        >
          <Link>Start a Free Trail</Link>
        </SectionHeader>
      </div>
    </section>
  );
};
