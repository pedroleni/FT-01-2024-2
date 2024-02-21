import { useEffect, useState } from "react";
import { useFetching } from "../hooks/useFetching";
import { getById } from "../services";
import { dataPokemon } from "../utils";
import { Card } from "./Card";
import "./Gallery.css";

export const Gallery = ({ data }) => {
  const [dataPage, setDataPage] = useState(null);
  const getData = async () => setDataPage(await data);
  useEffect(() => {
    console.log("me monto gallery 💢");
    getData();
  }, []);

  return (
    <div id="galleryPokemon">
      {" "}
      {dataPage?.map((item) => (
        <Card data={item} key={item.id} />
      ))}
    </div>
  );
};
