import { useState } from "react";
import "./Home.css";
import { H1 } from "../components";

export const Home = () => {
  const [dismount, setDismount] = useState(false);
  const [changeValue, setChangeValue] = useState(false);
  const [reload, setReload] = useState(false);
  return (
    <div id="homeContainer">
      {!dismount && <H1 stateReload={reload} />}
      <button onClick={() => setDismount((currentValue) => !currentValue)}>
        MONTAR O DESMONTAR
      </button>
      <button onClick={() => setChangeValue((currentValue) => !currentValue)}>
        CAMBIAR ESTADO
      </button>
      <button onClick={() => setReload((currentValue) => !currentValue)}>
        RELAOAD
      </button>
    </div>
  );
};
