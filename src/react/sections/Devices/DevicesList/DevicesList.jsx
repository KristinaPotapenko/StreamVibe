import { DeviceCard } from "../../../components/card/DeviceCard/DeviceCard";
import { devices } from "../devicesInfo";
import styles from "./DevicesList.module.scss";

export const DevicesList = () => {
  return (
    <ul className={styles.wrapper}>
      {devices.map((device) => {
        return (
          <DeviceCard
            key={device.id}
            src={device.icon}
            title={device.title}
            description={device.description}
          />
        );
      })}
    </ul>
  );
};
