/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "../mimimi.css";

const Translator = ({ texto }) => {
  const traducir = (texto) => texto.replace(/[aeou]/gi, "i");

  return <div className="translator__parragraph">{traducir(texto)}</div>;
};

export default Translator;
