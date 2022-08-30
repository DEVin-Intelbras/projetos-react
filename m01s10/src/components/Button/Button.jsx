import styles from "./Button.module.css";

const variantMap = {
  primary: "var(--color-main)",
  secondary: "var(--color-secondary)",
};

export const Button = ({ children, color: variant, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: variantMap[variant] }}
      className={styles.btn}
    >
      {children}
    </button>
  );
};
