import { Hero } from "../../sections/Hero/Hero";
import { Categories } from "../../sections/Categories/Categories";
import { Devices } from "../../sections/Devices/Devices";
import { Questions } from "../../sections/Questions/Questions";
import { Pricing } from "../../sections/Pricing/Pricing";
import { FreeTrial } from "../../sections/FreeTrial/FreeTrial";

export const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Devices />
      <Questions />
      <Pricing />
      <FreeTrial />
    </>
  );
};
