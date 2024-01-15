//todo --------------------TIPOS DE FUNCIONES QUE VAMOS A VER
//? .............> 1) funciones sin parametros
//? .............> 2) funciones con parametros
//? .............> 3) funciones que no retornan
//? .............> 4) funciones que retornan
//? .............> 5) funciones con parametro default

//!--------------------------CON PARAMETROS---------------------------------------
let cash = 4000;
function saludar(money) {
  console.log(`Hola manolo tienes ${money} euros`);
}
//!----------------------------CON PARAMETROS Y UN RETURN-------------------------------------
const saludarArrow = (money) =>
  console.log(`Hola manolo tienes ${money} euros`); /// hay un return implicito

function sumar(a, b) {
  return a + b; // return explicito
}

const sumarArrow = (a, b) => a + b; // return implicito

const numberOne = 23;
const numberTwo = 2;

const suma = sumarArrow(numberOne, numberTwo);
console.log("🚀 ~ suma:", suma);
//!---------------------SIN NO LES ENVIAMOS LOS PARAMETROS----------------------------------
const sumarSinParametros = sumarArrow(); // si no le envio parametro el a y b son undefined
console.log("🚀 ~ sumarSinParametros:", sumarSinParametros);

const multi = (a = 1, b = 1) => a * b; // a y b tienen un operador de asignacion de valor

const multiResult = multi();
console.log("🚀 ~ multiResult:", multiResult);

// -----------------------------------DIFENCIAS FUNCTION Y ARROW--------------------------------
// ----> 1) THIS

const casa = {
  medida: 400,
  getMedida: () => console.log(`La medida es: ${this.medida}`),
};

const casaFunction = {
  medida: 400,
  getMedida: function getMedida() {
    console.log(` La medida es: ${this.medida}`);
  },
};

casa.getMedida();
casaFunction.getMedida();

// --------------- POO

class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  // getter nos da info
  get area() {
    return this.calcularArea();
  }

  // metodos
  calcularArea() {
    return this.ancho * this.alto;
  }
}

const rectanguloNuevo = new Rectangulo(20, 10);

console.log(rectanguloNuevo.area);

// ------------> arguments

function argumentos(a, b, c) {
  console.log(arguments[1]);
}
argumentos(10, 20, 30);

// ------> arguments ----> no esta en function arrow
