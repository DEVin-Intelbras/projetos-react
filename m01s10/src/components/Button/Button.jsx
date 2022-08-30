import styles from "./Button.module.css";

export const Button = ({ children, color, onSelect }) => {
  return (
    <button
      onClick={onSelect}
      style={{ backgroundColor: color }}
      className={styles.container}
    >
      {children}
    </button>
  );
};
