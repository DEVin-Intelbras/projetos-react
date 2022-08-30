import styles from "./AccordionContent.module.css";
export const AccordionContent = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
