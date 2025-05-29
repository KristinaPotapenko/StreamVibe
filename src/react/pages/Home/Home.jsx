import { Hero } from "../../sections/Hero/Hero";
import { Categories } from "../../sections/Categories/Categories";
import { Devices } from "../../sections/Devices/Devices";
import { Questions } from "../../sections/Questions/Questions";
import { Plans } from "../../sections/Plans/Plans";
import { FreeTrial } from "../../sections/FreeTrial/FreeTrial";

export const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Devices />
      <Questions />
      <Plans />
      <FreeTrial />
    </>
  );
};
