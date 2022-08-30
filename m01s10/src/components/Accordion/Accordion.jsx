import { AccordionContent } from "./AccordionContent";
import { AccordionHeader } from "./AccordionHeader";

import styles from "./Accordion.module.css";

export const Accordion = ({ children, title, expanded, onExpand }) => {
  return (
    <div onClick={onExpand} className={styles.container}>
      <AccordionHeader expanded={expanded}>{title}</AccordionHeader>
      {expanded && <AccordionContent>{children}</AccordionContent>}
    </div>
  );
};
