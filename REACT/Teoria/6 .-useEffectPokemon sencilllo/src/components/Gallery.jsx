import "./Gallery.css";
import { Card } from "./Card";
import { createArray } from "../utils";

export const Gallery = () => {
  const array = createArray(200);

  return (
    <div id="galleryPokemon">
      {array.map((id) => (
        <Card id={id} />
      ))}
    </div>
  );
};
