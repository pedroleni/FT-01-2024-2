/**
 * String
 * Boolean
 * Null
 * Undefined
 * Number
 * Object: (Object object {} -- coleciones de clava : valor) (object array [] colecciones posicionadas )
 */

//? 1) ---------------String------------------------------------

let name = "Pedro";

console.log(name[0]); /// -----> P

let concatenar = 5 + 5 + "suma"; /// _----> 10suma
console.log("🚀 ~ concatenar:", concatenar);

let concatenarPrimeroString = "suma" + 5 + 5; // suma55
console.log("🚀 ~ concatenarPrimeroString:", concatenarPrimeroString);

let texto = "Soy el mejor ordenador";
let image = "https://kljsadjkhgdjkhgjhklshjkl";
let templateString = `
    <figure>
        <h1>${texto}</h1>
        <img src=${image} alt=${texto}/>
    </figure>
`;

const nameProfe = "Pedro";
const apellidos = "Lerida Nieto";

const nombreCompleto = `El profesor de web es ${nameProfe}, ${apellidos}`;
console.log("🚀 ~ nombreCompleto:", nombreCompleto);

const operacion = `La suma de 5 + 5 es ${5 + 5}`; // La suma de 5 + 5 es 10
console.log("🚀 ~ operacion:", operacion);

const sumar = (a, b) => {
  return a + b;
}; // cuando hay llaves el return hay que escribirlop
const sumarSimple = (a, b) => a + b; /// return implicito

const operacionSuma = `La suma de 5 mas 5 = ${sumar(5, 5)}`;
console.log("🚀 ~ operacionSuma:", operacionSuma);

/// ejemplo de  funcion

const rest = (a, b) => {
  if (a > b) {
    return a - b;
  } else {
    return b - a;
  }
};
const primerNumero = 2;
const segundoNumero = 5;

const resultado = rest(primerNumero, segundoNumero);
console.log("🚀 ~ resultado:", resultado);

/** los parametros de creacion  de la funcion no hace falta que sean con el mismo
 * nombre que los parametros de cuando llamamos a esa funcion
 */

//? ---------number------

const pi = 3.14;
const loteria = 400_000_000_000;
console.log("🚀 ~ loteria:", loteria);

//? ------------ boolean ------

const booleanExample = true; // true -- false

if (true) {
  // si la condicion pone un 1 quiere decir que es un true
  // si la condicion pone un 0 quiere decir que es un false
  console.log("tengo un true");
} else {
}

//? --------- null ------> no es nada

//? --------- undefined ----> nop esta definido pero si esta declarado

let age; /// esto esta declarado pero no esta definido

/**
 * Vamos a hacer una funcion que va comprobar que lo que le pasamos
 * por parametro es un number para poder hacerr la multiplicacion
 * sino lo que va devolver es un null ( recordar que devolver es return)
 */

const multiplicarSoloNumber = (a, b) => {
  /** tenemos que comprobar que los valores a y b sean number en su tipo */

  if (typeof a == "number" && typeof b == "number") {
    return a * b;
  } else {
    return null;
  }
};

const numberString = "dos";
const numberTwoMulti = 2;
const numberTypeNumber = 2;

const result = multiplicarSoloNumber(numberString, numberTwoMulti);
console.log("🚀 ~ result:", result); // ---> null

const resultTwo = multiplicarSoloNumber(numberTwoMulti, numberTypeNumber);
console.log("🚀 ~ esultTwo:", resultTwo);

//! --------------------------------------------------------------------------
//? ------------------------- object -----------------------------------------
//! --------------------------------------------------------------------------

//! 1) -------------- OBJECT OBJECT ----------------------
const ciudad = {
  name: "madrid",
  hab: {
    hombres: 213543223456,
    mujeres: 213543253,
  },
  cp: [28001, 28009],
};

//-------> modifcar claves o añadir claves

ciudad.name = "barcelona"; // modifico
ciudad.km = 213425; // añado

console.log("🚀 ~ ciudad:", ciudad);

delete ciudad.km; // de esta forma elimino km
console.log("🚀 ~ ciudad:", ciudad);

// forma 2 de modicar o acceder a las claves
ciudad["name"] = "Gerona";

console.log("🚀 ~ ciudad:", ciudad);

// acceder al valor de la clave

const habitantes = ciudad["hab"];
const habitantesAccesoConPunto = ciudad.hab;
console.log("🚀 ~ habitantesAccesoConPunto:", habitantesAccesoConPunto);
console.log("🚀 ~ habitantes:", habitantes);

//! 2) -------------- OBJECT ARRAY ----------------------

const cp = [28002, 13740, 28004];

// acceso al valor de las posiciones

const positionZero = cp[20];
console.log("🚀 ~ positionZero:", positionZero); // undefined

// modificaciones

cp[1] = "codigo postal";
console.log("🚀 ~ cp:", cp);

cp[6] = 28029;
console.log("🚀 ~ cp:", cp);

const testType = typeof cp[5];
console.log("🚀 ~ testType:", testType); /// undefined

/**
 * Vamos a hacer una funcion que dado un array con posiciones vacias,
 * elimine esas posicioones y nos devuelva(return) una array con los posiciones
 * con valor
 */

const limpiarArray = (array) => {
  const arrayLimpio = [];
  array.map((elementoUnicoDeLaPosicionQueEstoyRecorriendo, index) => {
    console.log(
      `la posicon ${index} tiene el valor ${elementoUnicoDeLaPosicionQueEstoyRecorriendo}`
    );

    /**metemos los elemenmtos que tienen valor en el array vacio */

    arrayLimpio.push(elementoUnicoDeLaPosicionQueEstoyRecorriendo);
  });

  return arrayLimpio;
};

const arrayLimpio = limpiarArray(cp);

console.log(arrayLimpio);
