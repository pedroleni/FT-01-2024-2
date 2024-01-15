//! creacion
let heroe = new Array();
let newHeroe = [];

//! Meter datos en un array
newHeroe = ["Batman", "Spiderman", "Wonder Woman"];
newHeroe[6] = "Thor";
console.log("🚀 ~ file: app.js:9 ~ newHeroe:", newHeroe);
//! ----------------------------------------------------------------------------------------
//? -----------------------------------------METODS y propiedad-----------------------------------------
//! ----------------------------------------------------------------------------------------

// 1) length
console.log(newHeroe.length); //

// 2) POP  ---- Elimina el ultimo elemento MODIFICA EL ARRAY ORIGINAL
console.log(newHeroe.pop()); // devuelve el elemento que ha eliminado
console.log("🚀 ~ newHeroe:", newHeroe);

// 3)  PUSH  --- Añade un elemento al final del array

newHeroe.push("wonder Woman");
console.log("🚀 ~ newHeroe:", newHeroe);

// 4) shift  ---> quita el primer elemento y modifica el array Original

const numberRandom = [1, 2, 3, 4, 5, 6];
console.log(numberRandom.shift()); // ---->  deuelve el elemento que elimina del array original
console.log("🚀 ~ numberRandom:", numberRandom);

// 5) unshift  ---> añade en la primera posicion  ---> no devuelve nada y te modifica el array el original
numberRandom.unshift(["lo nuevo"]);
console.log("🚀 ~ numberRandom:", numberRandom);

// 6) Sort --------> ordena el array ----> modifica el arrayOriginal

const arrayRandom = ["abc", 12213, "bca", 2332, 12, 0, 1, 34, "w"];
arrayRandom.sort();
console.log("🚀 ~ arrayRandom:", arrayRandom); /// no ordena bien

arrayRandom.sort((a, b) => b - a);
console.log("🚀 ~ arrayRandom:", arrayRandom);

/// reverse
arrayRandom.reverse();
console.log("🚀 ~ arrayRandom:", arrayRandom);

// splice /// ----> quita del array y puede añadir algo en esa posicion que se ha eliminado

const random = [1, 2, 3, 4, 5, 6];

const corte = random.splice(0, 3, 234, 54);
console.log("🚀 ~ random.:", random);

// 8) Join ------- convierte un array en un string

const saludo = ["Hola", "que", "tal?"];
const stringSaludo = saludo.join(" ");
console.log("🚀 ~ file: app.js:52 ~ stringSaludo:", stringSaludo);

/// 9) Concat  --- concatenar dos arrays

const concatArray = saludo.concat(saludo);
console.log("🚀 ~ concatArray:", concatArray);

// 10) Slice  sirve para eliminar elementos pero tambien para devolver esos elementos DEVUELVE EL TROZO QUE CORTA --> NO MODIFICA EL ARRAY ORIGINAL
const comidas = ["lentejas", "macarrones", "potaje"];
console.log(comidas.slice(0, 1));
console.log("🚀 ~ file: app.js:60 ~ comidas:", comidas);

// SPLICE MODIFICA EL ARRAY ORIGINAL ---- SLICE NO MODIFICA EL ARRRAY ORIGINAL

// 11) toString()
console.log(comidas.toString());

// 12) IndexOf()--------> si no lo tiene devuelve un -1

console.log(comidas.indexOf("lentejas"));

// 13) LastIndexOf -------> si no lo tiene devuelve -1

const recetas = ["lentejas", "macarrones", "potaje", "macarrones"];
console.log(recetas.lastIndexOf("macarrones"));

// 14) Includes ------> devuelve un boolean con el true o false

console.log(recetas.includes("lent")); /// false

console.log(recetas.includes("lentejas")); /// true
