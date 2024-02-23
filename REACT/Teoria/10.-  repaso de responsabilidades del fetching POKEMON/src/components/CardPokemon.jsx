import { useFetching } from "../hooks/useFetching";
import { getById } from "../services/pokemon.endPoint.service";
import "./CardPokemon.css";
import { useState, useEffect } from "react";
import { Spinner } from "./Spinner";
import { Link } from "react-router-dom";
export const CardPokemon = ({ id }) => {
  const { state } = useFetching(getById, id);
  return (
    <>
      {state.isLoading ? (
        <Spinner />
      ) : (
        <figure>
          <Link to={`/pokemon/${state?.data?.id}`}>
            <img
              src={state?.data?.sprites?.front_default}
              alt={state?.data?.name}
            />
          </Link>
        </figure>
      )}
    </>
  );
};
