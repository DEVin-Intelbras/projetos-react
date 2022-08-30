import PropTypes from "prop-types";

import styles from "./Paper.module.css";

export const Paper = (props) => {
  const { children } = props;

  return <div className={styles.container}>{children}</div>;
};

Paper.propTypes = {
  children: PropTypes.node.isRequired,
};
