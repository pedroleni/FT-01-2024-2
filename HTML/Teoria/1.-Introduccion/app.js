//! ------------_> CREAR ELEEMENTO CON CREATE ELEMENT-------

const parrafo = document.createElement("p");
parrafo.textContent = "Hola soy mi primer parrafo";

parrafo.addEventListener("click", () => {
  console.log("he pinchado en el parrafo");
});

/** con el appendChild lo pinta como hijo ddel body */
document.body.appendChild(parrafo); /// se puede hacer con el metodo append tambien

/** creamos dos botones que lo que van a hacer uno es escribir un texto diferente
 * dos va a cambiar el color del texto
 */

//! -----------> CREAR ELEMENTOS CON TEMPLATE ---------
const template = `
    <button id="btn-cambiarTexto" class="btn">CAMBIAR TEXTO</button>
    <button id="btn-cambiarColor" class="btn">CAMBIAR COLOR</button>
`;

/** como lo creado como un template y no con el metodo createElement tengo que buscarlos
 * en el html
 */

/** EL INNER PINTA ! */
document.body.innerHTML += template;

/** El queryselecto y el getElementByID BUSCAN ELEMENTOS EN EL HTML */
/* buscamos el elemento con el metodo getElementById*/
const buttonCambiarTexto = document.getElementById("btn-cambiarTexto");
buttonCambiarTexto.addEventListener("click", () => {
  const parrafoUpdate = document.querySelector("p");
  parrafoUpdate.textContent = "";
  parrafoUpdate.textContent = " has pinchado en el botton";
});

const btnCambiarColor = document.querySelector("#btn-cambiarColor");
btnCambiarColor.addEventListener("click", () => {
  const parrafoUpdateColor = document.querySelector("p");
  parrafoUpdateColor.style.color = "red";
});
/**
 * CUANDO EL ELEMENTO DE HTML ESTA CREADO CON CREATE ELEEMENT
 *  no hace falta buscar el elemento porque ya lo tenemos guardo en una variable
 *
 * CUANDO ESTA CREADO CON UN TEMPLATE
 * tenemos que buscar el elemento mediante un queryselecto etc etc
 * IMPÒRTANTE ANTES LOS ELEMENTOS TIENEN QUE ESTAR PINTADO EN LA PAGINA SINO CUANDO
 * VAYA A METER EL EVENTO ME VA A DECIR QUE ES NULL
 */
