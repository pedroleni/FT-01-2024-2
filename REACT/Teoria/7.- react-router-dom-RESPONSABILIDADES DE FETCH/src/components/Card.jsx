import React from "react";
import "./Card.css";
export const Card = ({ data }) => {
  const { id, name, sprites } = data;

  return (
    <figure>
      <img src={sprites.front_default} />
      <h3>{id}</h3>

      <p>{name.toUpperCase()}</p>
    </figure>
  );
};
