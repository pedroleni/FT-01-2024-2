import "./style.css";

/**
 * CREAMOS ELEMENTOS CON DOS FORMAS:
 * 1) TEMPLATE
 * 2) CREATE ELEMENT
 */

//!-------> template ---> innerHTML ---- insertAdjacentHTML

const h1 = `<h1>Hola soy un h1</h1>`;

const app = document
  .querySelector("#app")
  .insertAdjacentHTML("beforebegin", h1);

document.querySelector("#app").insertAdjacentHTML("afterend", h1);

document.querySelector("#app").innerHTML += h1;

/** si quiero modificar este elemento primero tengo que pintarlo y despues buscarlo en el
 * DOM y modificarlo
 *
 * SI NO LO PINTO NO PUEDO MODIFICARLO!!!!!
 */

/**
 * METER UN EVENTO CLICK AL H1
 */

//1) --> LO BUSCO PORQUE YA ESTA PINTADO

const h1Custom = document.querySelector("h1");

//2) --> lo modifico
h1Custom.addEventListener("click", (evento) => {
  console.log(evento.target.textContent);
});

//!-------> createElement ---> append appendClid ---- insertAdjacentElemenet

const input = document.createElement("input");
input.type = "text";
input.addEventListener("input", (e) => {
  console.log(e.target.value);
});

const h4Cumtom = document.createElement("h4");
h4Cumtom.textContent = "H4";

const h3Cumtom = document.createElement("h3");
h3Cumtom.textContent = "H3";

// ---> append permite meter varios elementos a la vez
document.querySelector("#app").append(input, h4Cumtom);
document.querySelector("#app").appendChild(h3Cumtom); // solo permite meter un elemento

document.querySelector("#app").insertAdjacentElement("beforebegin", h3Cumtom);
