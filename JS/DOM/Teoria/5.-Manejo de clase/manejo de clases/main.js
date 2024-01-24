import "./style.css";

/** creamos un parrado, le damos su contenido y por ultimo le ponemos una clase */
const parrafo = document.createElement("p");
parrafo.textContent = "soy un parrafo";
parrafo.classList.add("parrafoExample");

/** meter un id */
parrafo.setAttribute("id", "parrafoExample");
parrafo.id = "soyElID";
/** CON EL APPEND PINTAMOS EL PARRADO */
const app = document.getElementById("app");
app.append(parrafo);

/** ---------------TOGGLE ---------------------------- */

const button = document.createElement("button");
button.textContent = "cambiar de modo";

button.addEventListener("click", (e) => {
  document.body.classList.toggle("dark");
});

document.getElementById("app").append(button);
