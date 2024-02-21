import { useEffect, useState } from "react";
import "./Card.css";
import { getById } from "../services/pokemon.endPoint.service";
export const Card = ({ id }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => setData(await getById(id)))();
  }, []);

  return (
    <>
      {data !== null && (
        <figure>
          <img src={data.data.sprites.front_default} />
          <h3>{data.data.id}</h3>
          <p>{data.data.name.toUpperCase()}</p>
        </figure>
      )}
    </>
  );
};
