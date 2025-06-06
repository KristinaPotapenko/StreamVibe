import { PricingCard } from "../../../components/card/PricingCard/PricingCard";
import { pricingInfo } from "../pricingInfo";
import styles from "./PricingList.module.scss";

export const PricingList = ({ activeTabs }) => {
  return (
    <ul className={styles.wrapper}>
      {pricingInfo.map((plan) => {
        return (
          <PricingCard
            key={plan.id}
            id={plan.id}
            title={plan.title}
            description={plan.description}
            price={plan.price}
            activeTabs={activeTabs}
          />
        );
      })}
    </ul>
  );
};
