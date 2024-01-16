const numberRandom = 21345325;

///.........................> METODO PARA COMPROBAR SI ES UN NUMERO

//console.log(isNaN("45"));

console.log(isNaN("hola")); // true
console.log(isNaN("45.4565"));

//! --------- no dice que no es un numero -----> por eso nos da false "45", porque si es un numero,

//! ---------> si no es un numero da TRUE
//! ---------> si es un numero da FALSE ---> da igual que sea un string o que sea un number

//? --------------------- isInterger ---------------

console.log(Number.isInteger(4.346363646)); // -------> false porque no es entero
console.log(Number.isInteger(235)); // ---------------> true porque es entero

//? --------------------- parseInt ------------------
console.log(parseInt("2143214.34545"));
// --------> 322524544436 se queda con la parte entera y le cambia el tipo a number

//? -------------------- parseFloat  ----------------
console.log(parseFloat("235523.12352234"));

//? -------------------- toString() ------------------
console.log(numberRandom.toString());
