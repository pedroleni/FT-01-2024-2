const contador = (valorInicial) => {
  let acc = valorInicial;

  return {
    incremento: () => acc++,
    decremento: () => acc--,
    getAcc: () => acc,
    setAcc: (y) => (acc = y),
  };
};

const contadorSolve = contador(5);
console.log("🚀 ~ contadorSolve:", contadorSolve);
contadorSolve.incremento();
contadorSolve.setAcc(0);
console.log(contadorSolve.getAcc());
