//! ---- if --switch
let age = 18;

if (age >= 18) {
  console.log("eres mayor de edad");
} else {
  console.log("eres menor de edad");
}

const evaluarEdad = (edad) => {
  switch (edad) {
    case 18:
      return "tienes 18 años";

    //break;

    default:
      return "no tines 18 años";
  }
};

const result = evaluarEdad(17);
console.log("🚀 ~ result:", result);

//! ---- else-if

const edad = 16;

// ==  es igual solo sus dos valors

// === tiene que ser igual el valor y el tipo
if (edad >= 18) {
  console.log("puede conducir");
} else if (edad === 16) {
  console.log("party !!");
} else {
  console.log("estas en la flor de la vida");
}

//! ---- ternario

const edadProfe = 30;

edadProfe > 20
  ? console.log("el profe tiene mas de 20")
  : console.log("el profe tiene menos de 20 años");

const evaluarEdadProfe = (edad) => {
  return edad > 20
    ? "el profe tiene mas de 20"
    : edad > 18
    ? "el profe el mayor de edad pero tiene menos de 20"
    : "tiene menos de 18";
};

const resultEdad = evaluarEdadProfe(16);
console.log("🚀 ~ resultEdad:", resultEdad);

//! ---- operadores AND

const evaluarEdadProfeAND = (edad) => {
  return edad > 20 && "el profe tiene mas de 20";
};

const resultEvaluar = evaluarEdadProfeAND(18);
console.log("🚀 ~ resultEvaluar:", resultEvaluar);
