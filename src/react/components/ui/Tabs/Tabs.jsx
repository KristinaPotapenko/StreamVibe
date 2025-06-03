import styles from "./Tabs.module.scss";

export const Tabs = ({ tabs, activeTabs, setActiveTabs }) => {
  return (
    <ul className={styles.tabs}>
      {tabs.map((tab, index) => {
        return (
          <li key={index}>
            <button
              onClick={() => setActiveTabs(index)}
              className={`${styles.button} ${
                activeTabs === index && styles.isActive
              }`}
            >
              {tab}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
