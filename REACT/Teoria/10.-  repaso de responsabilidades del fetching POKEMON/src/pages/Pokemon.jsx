import { CardPokemon } from "../components";
import { createArray } from "../utils";
import "./Pokemon.css";
export const Pokemon = () => {
  const ids = createArray(200);
  return (
    <div id="containerPokemon">
      {ids.map((id) => (
        <CardPokemon id={id} key={id} />
      ))}
    </div>
  );
};
