import React, { Children, useState } from "react";
import styles from "./ButtonGroup.module.css";

export const ButtonGroup = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
