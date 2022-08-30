import styles from "./AccordionHeader.module.css";
export const AccordionHeader = ({ children, expanded }) => {
  return (
    <div className={styles.container}>
      {children} <span className={styles.more}>{expanded ? "-" : "+"}</span>
    </div>
  );
};
