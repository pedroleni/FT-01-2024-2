/** recordar el tema del concatenado con el + o el template string */
// formas de contanenar un string
console.log("El perro de Jorge se llama: " + dog);
console.log(`El perro de jorge que se llama ${dog} tiene 4 años`);
// mutaciones de tipo cuando contanemos

console.log(56 + 4 + " esto le costo el perro a jorge"); // 60 esto le costo el perro a jorge
console.log(" esto le costo el perro a jorge" + (56 + 4)); //  esto le costo el perro a jorge60
console.log(" esto le costo el perro a jorge " + 56 + 4); //esto le costo el perro a jorge 564
const dog = "Rodolfo";

///! -------------------------------------------------------------------------------------
//? ---------------------------------METODOS DE LOS STRING--------------------------------
//! --------------------------------------------------------------------------------------
// 1) Acceder a un caracter del string
console.log(dog[0]); // R

// 2) CharAt
console.log(dog.charAt(0));

// 3) Longitud
console.log(dog.length);

// 4) Include  //si lo tiene lanza un true
console.log(dog.includes("y")); // false

// 5) repeat
console.log(dog.repeat(3));

// 6) replace all:
const saludo = "Hola-que-tal?";
const saludoOk = saludo.replaceAll("-", " ");
console.log("🚀 ~ file: app.js:27 ~ saludoOk:", saludoOk);

// 7) slice
console.log(saludoOk.slice(0, 4)); // el cuatro no se coge seria de la 0 a la 3
console.log("🚀 ~ saludoOk:", saludoOk);

// 8) Split
console.log(saludo.split("-"));

// 9) toLowerCase y toUpperCase ---> convierte todo en minuscula y mayuscula
console.log(dog.toLowerCase());
console.log(dog.toUpperCase());

// Trim -----> quita los espacios delante y detras
const email = "     lololo434@gmail.com     ";
console.log(email.trim());
