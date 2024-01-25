// -------------- vamos hacer a hacer los servicios de los diferentes endpoints----

import { axiosUtil } from "../utils/axios";

//https://rickandmortyapi.com/api/character

export const getAllCharacters = async () => {
  const optionRequests = {
    method: "GET",
    url: "https://rickandmortyapi.com/api/character",
  };

  return await axiosUtil(optionRequests);
};

export const getById = async (id) => {
  const optionRequests = {
    method: "GET",
    url: `https://rickandmortyapi.com/api/character/${id}`,
  };

  return await axiosUtil(optionRequests);
};
