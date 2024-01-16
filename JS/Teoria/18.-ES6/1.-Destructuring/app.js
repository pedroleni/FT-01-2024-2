/*** los objetos son referencias de memoria unitarias que aunque tengan la misma
 * estructura tienen diferente referencia
 */

const alumn = {
  name: "Alberto",
};

const alumnCopy = alumn;
console.log("🚀 ~ alumn:", alumn);
alumnCopy.name = "luis";
console.log("🚀 ~ alumnCopy:", alumnCopy);
console.log("🚀 ~ alumn:", alumn);

/**
 * He modifcadfo el objeto original al modifcar el objeto copiado con un operador de
 * asignacion
 *
 * NO ES UNA COPIA VALIDA
 */

// esto lo saolucionaremos con un spread operator ----> una copia real sin modificar el objeto original copiado

//! ------> para los objetos ( object object / object array)

const movie = {
  title: "Avatar",
  director: "James Cameron",
  year: 2009,
  city: {
    spain: "Almeria",
    eeuu: "New York",
  },
};

const { title, year } = movie;
console.log("🚀 ~ year:", year);
console.log("🚀 ~  title:", title);

const {
  city: { spain },
} = movie;

console.log("🚀 ~ spain:", spain);

//! ----------------> OBJECT ARRAYS
const alumnos = ["Luis", "Felipe", "Lucas", "Maria", "Luis", "Felipe", "Lucas"];

const [, , lucas, ...restoAlumnos] = alumnos; // -->  poner un nombre a las constantes en funcion de su posicion
console.log("🚀 ~ restoAlumnos:", restoAlumnos);
console.log("🚀 ~ RESTAlumnos:", lucas);

/**
 *  (...) operador rest
 */

const sumarNumeros = (a, b, ...restoNumeros) => {
  console.log(restoNumeros);
  const sumarPrimerosParametros = a + b;
  let acc = sumarPrimerosParametros;
  restoNumeros.forEach((numero, index) => (acc += numero));
  console.log(acc);
};

sumarNumeros(1, 1, 2, 2, 2);

//! --------------------> destructuring de funciones
const contador = (valorInicial) => {
  let acc = valorInicial;

  return {
    incremento: () => acc++,
    decremento: () => acc--,
    getAcc: () => acc,
    setAcc: (y) => (acc = y),
  };
};
const { incremento, getAcc } = contador(0);

incremento();
console.log(getAcc());
