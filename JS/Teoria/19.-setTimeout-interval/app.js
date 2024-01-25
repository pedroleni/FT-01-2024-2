setTimeout(() => {
  //console.log("han pasado 3 segundos");
}, 3000);

/**
 * INTERVAL ------ CADA X INTERVALO SE EJECUTA UNA LOGICA
 *
 * SI QUEREMOS QUE ESE INTERVALO PARE TENEMOS QUE LIMPIARLO
 */

let intervalId;

let segundos = -1;

const print = () => {
  segundos++;
  console.log(segundos);

  if (segundos === 10) {
    return clearInterval(intervalId);
  }
};

intervalId = setInterval(print, 1000);
