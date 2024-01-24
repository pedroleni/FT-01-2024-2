const createComponent = (texto) => {
  const H1 = document.createElement("h1");
  H1.textContent = texto;

  return H1;
};

export const PrintH1 = (texto) =>
  document.getElementById("app").appendChild(createComponent(texto));

//export default printComponent; /// esto es un ejemplo no hace falta

/** 
 * 
 * PRIMERA FORMA QUE HICIMOS 
export const  PrintH1 = (texto) => {
  const H1 = document.createElement("h1");
  H1.textContent = texto;

  printComponent(H1)
};

const printComponent = (element) =>
  document.getElementById("app").appendChild(element);


  */

/**
 *
 *
 *
 *
 * LOS QUE  VAN CREATE ELEMENT ---append appendChild:
 * 1) se crea
 * 2) se le da contenido
 * 3) se le dan eventos en caso de que los tenga
 * 4) se pinta
 *
 *
 * LOS QUE SON POR TEMPLATE--- innerHTML
 * 1)creamos el template
 * 2) Se pinta
 * 3) Se busca el elemento en el DOM
 * 4)SE MODIFICA ESE ELEMENTO BUSCADO - se les mete los eventos en caso de que lo tenga
 */
