import React, { useState } from "react";

export const AccordionGroup = ({ children }) => {
  const [index, setIndex] = useState();

  const handleExpand = (itemIndex) => {
    if (itemIndex === index) {
      setIndex(-1);
    } else {
      setIndex(itemIndex);
    }
  };

  return React.Children.map(children, (child, itemIdx) =>
    React.cloneElement(child, {
      expanded: itemIdx == index,
      onExpand: () => {
        handleExpand(itemIdx);
      },
    })
  );
};
