import { Paper } from "../Paper";
import styles from "./Card.module.css";

export const Card = ({ titulo, descricao }) => {
  return (
    <li className={styles.container}>
      <Paper>
        <h2>{titulo}</h2>
        <div>{descricao}</div>
      </Paper>
    </li>
  );
};
