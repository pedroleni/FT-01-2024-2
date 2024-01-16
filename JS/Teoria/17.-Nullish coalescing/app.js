let res = {};

const codeRequest = res.status?.code ?? 300;
console.log("🚀 ~ codeRequest:", codeRequest);

/** El nullish operaria en caso que el valor que queremos asignar
 * a una variable sea null o undefined y lo que hace es que despues del operador ?? da un valor
 * alternativo
 */
