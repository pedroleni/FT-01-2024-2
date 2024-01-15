/* el naming es fundamental porque trabajos en equipo*/
//! ---------> NAMING

/// ----------------> No podemos meter solo numeros:  let 2 = "Hola"
/// ----------------> Utilizar camelCase ------->  let holaMundo
/// ----------------> Evitar las palabras reservadas ---> let, break, if .....
/// ----------------> No ponemos guiones en medio ---> let nombre-apellido /// correcto _-> let nombreApellido
/// ----------------> No utilizar tildes

//? --------------------> CONCEPTOS BASICOS DE LAS VARIABLES--------

//? -----------> 1) DECLARAR UNA VARIABLE ----->let name ( tipo de dato )
//? -----------> 2) INICIALIZAR UNA VARIABLE ----> let name = " Pedro "
//? -----------> 3) NO HACE FALTA INICIALIZAR UNA VARIABLE --->  let name (valorr no definido undefined)

/**
 * SCOPE: EL AMBITO DE ACTUACION QUE TIENE VIGENCIA LA VARIABLE-- DONDE SE PUEDE UTILIZAR
 *  ------ LOCAL o bloque
 *  ------ global
 *  */

//TODO ----------------> TIPOS DE VARIABLES  ---------------------

//TODO ------------------- VAR, LET , CONST -----------------

//! ---------------------------VAR --LET ------------------------------

let apellido = "lerida";
//let apellido -----> no puedo volver a declararlo en el mismo bloque que le afecta  el scope

if (apellido == "lerida") {
  //console.log(apellido); ------> aqui daria error porque la variable global pierde su vigencia
  let apellido = "nieto";
  //console.log(apellido);
}
//console.log(apellido);

var name = "Pedro";
var name = "lucio";

if (name == "lucio") {
  var name = "Mario";
}

//console.log(name);

//! -------------------------------- const -------------------------
// js es mutable el tipo puedo cambiar de tipo number a tipo string
let number = 1254325623;
number = "dos";

// en teoria const quiere decir que es constante en el tipo y en su valor
const pi = 3.1432454363;
//pi = "rodolfo"; //----> esta dar error porquer modifico su tipo y su valor

/**
 * tipos de datos primitivos
 *  -string: ""
 *  -number: 214
 *  -boolean: true, false
 *  -null
 *  -undefined:
 *  -object:
 *      - object - object = {name: "Pedro"}
 *      - object - array = ["Pedro", {name: "Pedro"}]
 */

//todo --------------------------__> object - array --------------------

const data = [];
data[0] = "Pedro";
data.push("lerida");
//data = "HOLA"; -----> no podemos cambiar el tipo pero si su valor
console.log(data);

//todo --------------------------__> object - object --------------------

const profe = {
  name: "Pedro",
  apellido: "lerida",
};

profe.direccion = "general 12 2343245";
/*profe = {
  name: "Luis",
};*/
console.log(profe);

// -------------------------------------------------------------------------
//--------------------------------------------------------------------------
let numberOne = {
  name: ["pedro", 30],
};
let numberTwo = {
  name: ["pedro", 30],
};

if (numberOne.toString() !== numberTwo.toString())
  console.log("no son iguales");
