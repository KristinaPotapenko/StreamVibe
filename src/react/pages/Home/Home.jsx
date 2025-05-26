import { Hero } from "../../sections/Hero/Hero";
import { Devices } from "../../sections/Devices/Devices";
import { Questions } from "../../sections/Questions/Questions";
import { Plans } from "../../sections/Plans/Plans";
import { FreeTrial } from "../../sections/FreeTrial/FreeTrial";

export const Home = () => {
  return (
    <>
      <Hero />
      <Devices />
      <Questions />
      <Plans />
      <FreeTrial />
    </>
  );
};
