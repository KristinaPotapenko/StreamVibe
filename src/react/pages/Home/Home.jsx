import { Hero } from "../../sections/Hero/Hero";
import { Devices } from "../../sections/Devices/Devices";
import { Questions } from "../../sections/Questions/Questions";
import { Plans } from "../../sections/Plans/Plans";

export const Home = () => {
  return (
    <>
      <Hero />
      <Devices />
      <Questions />
      <Plans />
    </>
  );
};
