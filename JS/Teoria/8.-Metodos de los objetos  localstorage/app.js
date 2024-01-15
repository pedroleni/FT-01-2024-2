const ferrari = {
  marca: "ferrari",
  modelo: "F12",
};

// -------> SACAR LA CLAVES DEL OBJETO

const keys = Object.keys(ferrari);
console.log("🚀 ~  keys:", keys);

// ----> SACAR LOS VALORES DE LAS CLAVES

const values = Object.values(ferrari);
console.log("🚀 ~  values :", values);

const entries = Object.entries(ferrari);
console.log("🚀 ~ entries:", entries); //  [[ 'marca', 'ferrari' ], [ 'modelo', 'F12' ] ]

// borrar una propiedad

delete ferrari.modelo;
console.log("🚀 ~ ferrari:", ferrari);

/// ! ----------------------------------- LOCALSTORAGE ----------------------------
// ---------_> lo quie guarda es texto plano ------- >  puede guardar un JSON  en string ---> comillas en las claves
const userSession = {
  name: "Pedro",
  token: null,
  fav: [],
};

// 1) ----> convertirlo a un string de formato JSON

const jsonUser = JSON.stringify(userSession);
console.log("🚀 ~ JsonUser:", jsonUser);

// 2) guardamos al local storage

localStorage.setItem("user", jsonUser);

// ----> borrar el item detro del storage
// ---> localStorage.removeItem("user"); // BORRAR EN CONCRETO ALGO
// ---> localStorage.clear(); /// ---> BORRA TODO

//sessionStorage.setItem("user", jsonUser);
// ------> TRAER INFO DEL LOCALSTORAGE
const user = localStorage.getItem("user");
console.log("🚀 ~ user:", user);

// ------> CONVERTIRLO DE STRING A JSON

const JSONuser = JSON.parse(user);
console.log("🚀 ~ JSONuser :", JSONuser);

//! --------------------------------------------------------------------------------------
/**
 * HACER UN BOTON CON EL MANEJO DEL DOM QUE BORRE EL LOCALSTORAGE
 */

const button = document.createElement("button");
button.textContent = "borrar el localstorage";
button.addEventListener("click", () => {
  console.log("entro en el evento");
  localStorage.clear();
  alert("Hemos borrado el localstorage");
});

document.body.appendChild(button);
