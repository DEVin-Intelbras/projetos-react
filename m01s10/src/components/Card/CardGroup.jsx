import styles from "./CardGroup.module.css";

export const CardGroup = ({ children }) => {
  return <ul className={styles.container}>{children}</ul>;
};
