const app = document.getElementById("app");
console.log("🚀 ~ file: main.js:2 ~ app:", app);

// ------> saber los hijos del app

const child = app.childNodes;
console.log("🚀 ~ file: main.js:5 ~ child:", child[1].childNodes);

child[1].childNodes[1].textContent = "esto es una prueba";

const allLi = document.querySelectorAll("li");

allLi.forEach((li, index) => (li.textContent = `su index es: ${index}`));

allLi[3].style.background = "blue";
allLi[3].style.color = "white";

/** METODO QUE NOS DEVUELVE SI TIENES O NO HIJOS */

const hasChild = app.hasChildNodes(); /// devuelve un boolean
console.log("🚀 ~ hasChild:", hasChild);
