import { PrintH1, PrintUl } from "./src/components";
//import printComponent from "./src/components/H1/H1"; // importacion por defecto
const titulo = "Soy un h1";
PrintH1(titulo);
PrintH1("soy el segundo h1");
PrintUl();
/**
 *
 *
 *
 */
import "./style.css";

/** BUSCAR ELEMENTOS  */
//! ---------- ID
const app = document.getElementById("app");
console.log("🚀 ~ file: main.js:4 ~ app:", app);

//! ------------ por etiqueta ----
const liTag = document.getElementsByTagName("li"); /// htmlColection

/// ES COMO UN ARRAY ------ me devuelve un HTMLCollection --->
const h1s = document.getElementsByTagName("h1");
console.log("🚀 ~ h1s:", h1s[1]);

//! ------------ el querySelectorAll----
const allH1 = document.querySelectorAll("h1");
console.log("🚀 ~ allH1 :", allH1);

//! ---------- querySelector
const ul = document.querySelector("ul"); // BUSQUEDA POR ETIQUETA
console.log("🚀 ~ file: main.js:8 ~ ul:", ul);

const divPorClase = document.querySelector(".clase"); //BUSQUEDA DE ELEMENTO POR CLASE
console.log("🚀 ~ file: main.js:11 ~ divPorClase:", divPorClase);

const appID = document.querySelector("#app"); // BUSQUEDA POR ID
console.log("🚀 ~ file: main.js:14 ~ appID:", appID);

const img = document.querySelector("[src='hola']"); // BUSQUEDA POR ATRIBUTO
console.log("🚀 ~ file: main.js:17 ~ img:", img);
