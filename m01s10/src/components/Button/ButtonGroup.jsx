import React, { Children, useState } from "react";
import styles from "./ButtonGroup.module.css";

export const ButtonGroup = ({ children }) => {
  const [selecionado, setSelecionado] = useState(-1);

  const toggleSelecionado = (indice) => {
    if (indice === selecionado) {
      setSelecionado(-1);
    } else {
      setSelecionado(indice);
    }
  };

  return (
    <div className={styles.container}>
      {Children.map(children, (botao, index) => {
        return React.cloneElement(botao, {
          color: selecionado === index ? "#0000FF" : "#FF0000",
          onSelect: () => toggleSelecionado(index),
        });
      })}
    </div>
  );
};
