import { PlansCard } from "../../../components/card/PlansCard/PlansCard";
import { plantsInfo } from "../plansInfo";
import styles from "./PlansList.module.scss";

export const PlansList = ({ isActiveTabsMonthly }) => {
  return (
    <ul className={styles.wrapper}>
      {plantsInfo.map((plan) => {
        return (
          <PlansCard
            key={plan.id}
            id={plan.id}
            title={plan.title}
            description={plan.description}
            price={plan.price}
            isActiveTabsMonthly={isActiveTabsMonthly}
          />
        );
      })}
    </ul>
  );
};
