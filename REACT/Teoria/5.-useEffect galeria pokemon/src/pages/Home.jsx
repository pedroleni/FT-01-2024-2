import { Gallery } from "../components";
import { dataPokemon } from "../utils";
import "./Home.css";

export const Home = () => {
  const data = dataPokemon();

  return (
    <div id="homeContainer">
      <Gallery data={data} />
    </div>
  );
};
