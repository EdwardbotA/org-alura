import { useState } from "react";
import "./Campo.css";

const Campo = (props) => {
  const {
    placeholder,
    type = "text",
    actualizarValor,
    titulo,
    required,
    valor,
  } = props;
  const placeholderModificador = `${placeholder}...`;

  const manejarCambio = (event) => {
    actualizarValor(event.target.value);
  };

  return (
    <div className={`campo campo-${type}`}>
      <label>{titulo}</label>
      <input
        placeholder={placeholderModificador}
        required={required}
        value={valor}
        onChange={manejarCambio}
        type={type}
      />
    </div>
  );
};

export default Campo;
