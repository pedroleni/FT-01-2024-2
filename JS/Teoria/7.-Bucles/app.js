// ---------> iterar: recorrer los elementos de una coleccion
// ---------> posicion: el lugar que ocupa el elemento dentro del conjunto de datos
// ---------> elementos singular: dentro del conjunto, cada elemento por separado
// ---------> index: es el numero que ocupa esa posición
// ---------> elementos iterables: string, arrays, set, arguments

//! ----------------------------------------------------------------------
//? ---------------------------- while------------------------------------
//! ----------------------------------------------------------------------

let i = 0;

// mientras se cumpla la condicion se ejecuta lo que hay en las llaves
while (i < 10) {
  console.log(`Estamos con la i: ${i}`);
  i++;
}

//! ----------------------------------------------------------------------
//? ---------------------------- FOR--------------------------------------
//! ----------------------------------------------------------------------

const comidas = ["sandia", "paella", "lentejas", "ensalada"];

for (let i = 0; i < comidas.length; i++) {
  console.log(`La comida ${comidas[i]} tiene el index ${i}`);
}

/**
 * Ejercicio de buscador de comidas
 */

const buscarComida = (arrayDeComidas, comidaABuscar) => {
  let acc = 0;
  for (let i = 0; i < arrayDeComidas.length; i++) {
    arrayDeComidas[i].toLowerCase().trim() ===
      comidaABuscar.toLowerCase().trim() && acc++;
  }

  return acc === 0
    ? `No se encuentra la comida`
    : `La comida se encuentra con el numero de veces: ${acc}`;
};

const resultadoBusqueda = buscarComida(comidas, "Paella   ");
console.log("🚀 ~ resultadoBusqueda:", resultadoBusqueda);

/**
 * Recorrer un objeto con un for normal e identificar que el CP sea 28029
 *  en el usuario a buscar
 */

const alumno = {
  name: "barbara",
  CP: 28003,
};

const buscarAlumnoCP = (cp, alumno) => {
  const claves = Object.keys(alumno); /// nos devuelve un array con todas lss claves

  for (let i = 0; i < claves.length; i++) {
    if (claves[i] == "CP") {
      return alumno[claves[i]] === cp ? true : false;
    }
  }
};

const resultBusquedaCP = buscarAlumnoCP(28029, alumno);
console.log("🚀 ~ resultBusquedaCP:", resultBusquedaCP);

//! ----------------------------------------------------------------------
//? ---------------------------- FOR IN-----------------------------------
//! ----------------------------------------------------------------------
/// -------------es principal mente para los object object

/// EL FOR IN NOS DA LAS CLAVES DEL OBJETO Y CON ESO SACAMOS EL VALOR DE LA CLAVE OBJECT[NOMBRE_DE_ LA_CLAVE]

const buscarAlumnoCPforIn = (cpABuscar, alumno) => {
  for (let clave in alumno) {
    if (clave === "CP") {
      return alumno[clave] === cpABuscar ? true : false;
    }
  }
};

const alumn = {
  name: "Luis",
  CP: 28029,
};

const forInBuscar = buscarAlumnoCPforIn(28029, alumn);
console.log("🚀 ~ forInBuscar:", forInBuscar);

//! ----------------------------------------------------------------------
//? ---------------------------- FOR OF-----------------------------------
//! ----------------------------------------------------------------------

/// --------> tipos de datos iterables------> principalmente arrays ----> no un object object

let escuela = "Neoland";

for (let letra of escuela) {
  console.log(letra);
}

/**
 * Contador de las veces que aparece una letra en un texto
 */

const frase =
  "Alemania es el pais con mayor riqueza por habitante de la eurozona"; // 10 a

const contadorLetras = (texto, letraAContrar) => {
  let acc = 0;
  for (let letra of texto) {
    letra.toLowerCase() === letraAContrar.toLowerCase() && acc++;
  }

  return acc;
};

const accLetra = contadorLetras(frase, "e");
console.log("🚀 ~ accLetra:", accLetra);

//! ----------------------------------------------------------------------
//? ----------------------------- FOREACH---------------------------------
//! ----------------------------------------------------------------------
///  principalmente se utilizar para los array
let texto = "Estamos empezando con el genial mundo de JS";

/**texto.forEach((letra, index) => {
  console.log(letra);
}); ------> DA ERROR ------------>

/** No sirve para irterar un string porque no se encuentra dentro de su prototype
 *  Protype son los metodos y propiedades que podemnos utilizar y que nos lo da por defecto la API de JS
 */
