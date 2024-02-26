import { useState } from "react"; // hook

import "./App.css";
import { Movie, Review } from "./components";

const App = () => {
  const [value, setValue] = useState(0);
  const changeValue = () => setValue(0);

  return (
    <>
      <Movie
        name={"Harry Potter"}
        cover={
          "https://i.blogs.es/2ad4d1/harry-potter-franquicia/1366_2000.jpg"
        }
        cambioDeEstado={changeValue}
      />

      <Review score={value} />
      <label htmlFor="score">Por favor introduzca una puntuacion:</label>
      <input
        type="number"
        name="score"
        id="score"
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export default App;
