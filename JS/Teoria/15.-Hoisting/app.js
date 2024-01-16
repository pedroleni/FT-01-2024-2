const name = "Pedro";
/** 
getName();
const getName = () => console.log(name);

----> esto con vite si funciona podemos llamar a la funcion antes de crearla
*/

getName();
function getName() {
  console.log(name);
}

const result = suma(1, 2);
console.log("🚀 ~ result :", result);

function suma(a, b) {
  return a + b;
}
