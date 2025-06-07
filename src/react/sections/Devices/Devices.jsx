import { SectionHeader } from "../../components/Section/SectionHeader/sectionHeader";
import { DevicesList } from "./DevicesList/DevicesList";

export const Devices = () => {
  return (
    <section id="devices" className="section container">
      <SectionHeader
        title="We Provide you streaming experience across various devices."
        description="With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
      />
      <DevicesList />
    </section>
  );
};
