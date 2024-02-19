import { useState } from "react"; // hook
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Parrafo from "./components/Parrafo/Parrafo";

const App = () => {
  // esta parte se puede escribir js de forma normal
  const [count, setCount] = useState(2);
  console.log("VALOR EN  LA 10 ", count); // valor actual actualzado del estado
  //setCount((currentValueState) => currentValueState + 1); -.--> crea un bucle infinito de render porque los estados son los chivatos de hacer un nuevo render
  const cambiarElValorDelEstado = () => {
    /// cambio el valor del estado y le incremento uno
    setCount((currentValueState) => currentValueState + 1);
    console.log(count); // no te da el valor actual por el tema de la asincronia
  };

  /**
   * 1) AQUI ARRIBA NO PODEMOS CAMBIAR UN ESTADO CON SU FUNCION SET DIRECTAMENTE:
   *    esto genera un bucle infinitio
   *
   * 2) PODEMOS HACER ARRIBA DEL RETURN UN IF, ELSE IF, FOR OF, FOR IN, ETC
   *
   * 3) PARA SABER EL ESTADO ACTUAL CON UN CONSOLE.LOG PREFERIBLEMENTE ABAJO DENTRO DEL RETURN Y TIENE QUE LLEVAR LLAVES
   *
   * 4) SI QUEREMOS VER EL VALOR ACTUAL DEL ESTADO ARRIBA DEL RETURN METER EL CONSOLE.LOG EN LA PRIMERA LINEA DEL COMPONENTE
   *
   * 5) LOS COMENTARIOS EN EL RETURN SOLO SE PUEDEN HACER SI SON DE VARIAS LINEAS
   *
   * 6) SOLO PUEDO HACER UNA LINEA LIGICA en LAS LLAVES DE ABAJO DEL RETURN
   *
   * 7) LOS COMPOENTES QUE VAN EN OTRO ARCHIVO HAY QUE TENER EN CUENTA QUE:
   *    - Las funciones van con una arrow y la palabra empieza en mayuscualas_--> el nombre de la funcion y el archivo
   *    - para poder utilizarlas se pone como si fuera una etiqueta <NombreDelComponente />
  
   */
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        {
          console.log("VALOR EN  LA 23 ", count)

          /**count === 3
            ? console.log("hola")
            : console.log(
                "adios") ----> DA ERROR ES OTRA LINEA LOGICA DIFERENTE, SI QUIERO UNIRLAS LES PONGO UN OPERADOR AND
               /**  esto es un comentario valido aquui abajo */
        }
        {count == 3 ? <p>Hola que tal</p> : <p>adios</p>}

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {console.log("este console esta en la parte del return ")}

        <Parrafo />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default App;
