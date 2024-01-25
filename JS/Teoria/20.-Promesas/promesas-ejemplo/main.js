import { addItem } from "./src/services/fruteria.service";
import "./style.css";

const listFruit = ["apple", "lemon", "pinapple"];

const addItemPageHome = async () => {
  try {
    const response = await addItem("carrot", listFruit);
    printList(response);
  } catch (error) {
    printError();
  }
};

const printList = (data) => {
  const ul = document.createElement("ul");
  data.map((fruta, index) => {
    const li = document.createElement("li");
    li.textContent = fruta;
    ul.appendChild(li);
  });

  document.getElementById("app").append(ul);
};

const printError = () =>
  (document.querySelector("#app").innerHTML =
    "<h3>Hemos tenido un error al introducir la fruta</h3>");

addItemPageHome();
