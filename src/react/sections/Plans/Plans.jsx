import { useState } from "react";
import { SectionHeader } from "../../components/Section/SectionHeader/sectionHeader";
import { Tabs } from "../../components/ui/Tabs/Tabs";
import { PlansList } from "./PlansList/PlansList";

export const Plans = () => {
  const [activeTabs, setActiveTabs] = useState(0);

  return (
    <section className="section container">
      <SectionHeader
        title="Choose the plan that's right for you"
        description="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
      >
        <Tabs
          tabs={["Monthly", "Yearly"]}
          activeTabs={activeTabs}
          setActiveTabs={setActiveTabs}
        />
      </SectionHeader>
      <PlansList activeTabs={activeTabs} />
    </section>
  );
};
