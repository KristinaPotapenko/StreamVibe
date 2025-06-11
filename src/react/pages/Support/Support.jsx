import { FreeTrial } from "../../sections/FreeTrial/FreeTrial";
import { Questions } from "../../sections/Questions/Questions";
import { SupportContact } from "../../sections/SupportContact/SupportContact";

export const Support = () => {
  return (
    <div>
      <SupportContact />
      <Questions />
      <FreeTrial />
    </div>
  );
};
