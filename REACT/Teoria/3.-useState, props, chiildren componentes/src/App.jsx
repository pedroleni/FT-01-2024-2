import { useState } from "react"; // hook
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { dataHome } from "./data/data.home";
import Anchor from "./components/Anchor/Anchor";
import AnchorOPCION2 from "./components/Anchor/ArchorOPCION2";
import H1 from "./components/H1/H1";
import Button from "./components/Button/Button";

const App = () => {
  const [count, setCount] = useState(0);

  /**^
   * useState  ----> genera estados son los chivatos de la reconciliacion para saber si hago o no un nuevo render
   * ---------------> si cambia un estado revisass si tienes o no que renderizar de nuevo
   *  --------------> si cambio un estado la funcion se vuelve a lanzar
   *
   * const [count, setCount] = useState(0);
   *
   * -----> SINTAXIS
   * ----------> 1) const
   * ----------> 2) un array con una variable y una funcion
   *                  -> variable: el valor actual del estado
   *                  -> la funcion set: para modificar el valor del estado
   * ----------> 3) useState---> llamamos al hook
   * ----------> 4) ()---> en los parentesis lo que metemos es el estado incial
   *
   * SI RECARGO LA PAGINA ESTE ESTADO SE REINICIALIZA ---> el valor de  0
   *
   *
   * LA FUNCIOON SET SE PUEDE UTILIZAR DE DOS FORMAS:
   *
   *      --> 1)Directamente el valor en el parentesis:  setCount(10)
   *      --> 2)Mediante una callback en el parentesis: me permite acceder al valor actual setCount((valorActual)=> valorActual + 1)
   * ------------------ > la segunda forma la utilizo cuando quiero meter mas logica que simplemente actualzar
   * ------------------ > cuando el estado no este en mi archivo sino que es de mi padre, en ese caso meto una callback
   */

  /**
   * PROPS -----> dentro de las props tenemos los children --> COMUNICACION PADRE A HIJO
   * -----------------> La info metida por children se ponen entre la etiqueta de cierre y apertura
   * ----------------------> ejemplo:  <H1>Vite + React</H1> ---> Vite + React --> la info enviada por el children seria el texto
   */

  const saludar = () => console.log("hola que tal ");

  return (
    <>
      <div>
        {dataHome.a.map((anchor) => (
          <AnchorOPCION2
            key={anchor.href}
            enlace={anchor.href}
            tar={anchor.target}
            source={anchor.img.src}
            alterna={anchor.img.alt}
            classi={anchor.img.className}
          />
        ))}
      </div>
      <H1>Vite + React</H1>
      <Button
        funcionSeteadora={setCount}
        valorDelEstado={count}
        saludar={saludar}
      />
      <div className="card"></div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default App;
