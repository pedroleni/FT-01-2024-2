//! operador AND &&

//console.log(true && true); // en este caso es true en el resto es false
//console.log(false && true);
//console.log(false && false);
//console.log(true && false);

//TODO ------ AND SOLO ES TRUE CUANDO AMBOS SON TRUE

//! operador OR ||
console.log(true || true); // true
console.log(false || true); // true
console.log(false || false); // false
console.log(true || false); // true

let age = 25;
let name = "Pedro";
if (age == 30 || name == "Pedro") console.log("entro");

//! OPERADOR NOT ! ----> lo convierte a un boolean pero en el contrario
let nullExample;
let exampleNullDefined = null;

// --------- undefined = false
console.log(!nullExample); // -----> true
console.log(!exampleNullDefined); //----> true

/** el undefined y el null es un false en boolean */
if (nullExample) {
  console.log("es verdadero");
} else {
  console.log("es falso");
}
