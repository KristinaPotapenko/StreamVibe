import { SectionHeader } from "../../components/Section/SectionHeader/sectionHeader";
import { PlanComparisonTable } from "./PlanComparisonTable/PlanComparisonTable";

export const PlanOverview = () => {
  return (
    <section className={`section container`}>
      <SectionHeader
        title="Compare our plans and find the right one for you"
        description="StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you."
      />
      <PlanComparisonTable />
    </section>
  );
};
