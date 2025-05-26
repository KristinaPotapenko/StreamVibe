import { useState } from "react";
import { SectionHeader } from "../../components/Section/SectionHeader/sectionHeader";
import { Tabs } from "../../components/ui/Tabs/Tabs";
import { PlansList } from "./PlansList/PlansList";
import styles from "./Plans.module.scss";

export const Plans = () => {
  const [isActiveTabsMonthly, setIsActiveTabsMonthly] = useState(true);

  return (
    <section className="section container">
      <SectionHeader
        title="Choose the plan that's right for you"
        description="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
      >
        <Tabs>
          <button
            onClick={() => setIsActiveTabsMonthly(true)}
            className={`${styles.button} ${
              isActiveTabsMonthly && styles.isActive
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsActiveTabsMonthly(false)}
            className={`${styles.button} ${
              !isActiveTabsMonthly && styles.isActive
            }`}
          >
            Yearly
          </button>
        </Tabs>
      </SectionHeader>
      <PlansList isActiveTabsMonthly={isActiveTabsMonthly} />
    </section>
  );
};
