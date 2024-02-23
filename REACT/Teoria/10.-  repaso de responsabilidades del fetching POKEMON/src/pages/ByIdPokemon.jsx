import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getById } from "../services/pokemon.endPoint.service";
import { useNavigate } from "react-router-dom";
import "./ByIdPokemon.css";
export const ByIdPokemon = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      await getById(id)
        .then((res) => res.status == 200 && setData(res.data))
        .catch((error) => console.log(error));
    })();
  }, []);

  return (
    <div id="containerByIdPokemon">
      {console.log(data)}
      {data != null && (
        <figure className="figurePokemonById">
          <div id="imgContainerPokemonId">
            <img
              src={data?.sprites?.other?.dream_world?.front_default}
              alt={data?.name}
            />
          </div>
          <div id="infoContainerPokemonId">
            <h1>{data?.name.toUpperCase()}</h1>
            <h4>{data?.id}</h4>

            <p>{data?.moves[0].move.name}</p>
            <p>{data?.moves[1].move.name}</p>
            <p>{data?.moves[2].move.name}</p>
          </div>
        </figure>
      )}

      <button onClick={() => navigate("/pokemon")}>VOLVER A LA GALLERIA</button>
    </div>
  );
};
