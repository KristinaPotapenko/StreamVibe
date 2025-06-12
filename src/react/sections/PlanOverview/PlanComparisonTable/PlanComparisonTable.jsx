import { useState } from "react";
import { useWindowWidth } from "../../../../scripts/hook/useWindowWidth";
import { PlanFeature } from "../PlanFeature/PlanFeature";
import { PlanHeader } from "../PlanHeader/PlanHeader";
import { Tabs } from "../../../components/ui/Tabs/Tabs";
import styles from "./PlanComparisonTable.module.scss";

export const PlanComparisonTable = () => {
  const windowWidth = useWindowWidth();
  const [activeTabs, setActiveTabs] = useState(0);

  return (
    <>
      {windowWidth < 768 && (
        <Tabs
          tabs={["Basic", "Standard", "Premium"]}
          activeTabs={activeTabs}
          setActiveTabs={setActiveTabs}
        />
      )}
      <div className={styles.tablet}>
        <PlanHeader />
        <PlanFeature activeTabs={activeTabs} windowWidth={windowWidth} />
      </div>
    </>
  );
};
