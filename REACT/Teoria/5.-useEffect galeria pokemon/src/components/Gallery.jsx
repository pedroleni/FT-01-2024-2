import { useEffect, useState } from "react";
import { useFetching } from "../hooks/useFetching";
import { getById } from "../services";
import { dataPokemon } from "../utils";
import { Card } from "./Card";

export const Gallery = () => {
  const [dataPage, setDataPage] = useState(null);

  const data = (async () => await dataPokemon())().then((res) => res);

  useEffect(() => {}, []);

  return (
    <div id="galleryPokemon">
      {(async () => {
        try {
          const dataTwo = await data;
          dataTwo.map((item) => <Card data={item} key={item.id} />);
        } catch (error) {}
      })()}
    </div>
  );
};
