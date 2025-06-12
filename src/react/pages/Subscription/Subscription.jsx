import { FreeTrial } from "../../sections/FreeTrial/FreeTrial";
import { PlanOverview } from "../../sections/PlanOverview/PlanOverview";
import { Pricing } from "../../sections/Pricing/Pricing";

export const Subscription = () => {
  return (
    <>
      <Pricing isFirstSection={true} />
      <PlanOverview />
      <FreeTrial />
    </>
  );
};
