/**
 *  ...  => es igual que el rest porque tiene tiene tres puntos pero son diferentes en funcionalidad
 * el spread operator lo que hace es una copia real del objetos y de arrays
 */

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

const movie = {
  title: "Avatar",
  director: "James Cameron",
  year: 2009,
  city: {
    spain: "Almeria",
    eeuu: "New York",
  },
};

const copyMovie = movie;

copyMovie.title = "TITANIC";
console.log("🚀 ~ copyMovie:", copyMovie);
console.log("🚀 ~ movie:", movie);

// ------------_> SPRREAD OPERATOR

const copySpread = { ...movie };
copySpread.title = "Dora";
console.log("🚀 ~ copySpread:", copySpread);
console.log("🚀 ~ movie:", movie);

const copySpreadModificandUnaClave = { ...movie, name: "Pokemon" };
console.log("🚀 ~ copySpreadModificandUnaClave:", copySpreadModificandUnaClave);

const copyAndConcat = { ...movie, ...copySpreadModificandUnaClave };
console.log("🚀 ~ copyAndConcat:", copyAndConcat);

/** si concateno dos objetos que coinciden en el nombre de sus claves se queda con la clave
 * del ultimo elemento concatenado, en el ejemplo anterior se quedaria con los valores de copySpreadModificandUnaClave
 */
/// esto es iguakl para los arrays

const telephone = [34, 35, 39, 4];
const numberMobile = [124234123, 1242134124, 1241244];

const concatNumberArray = [...telephone, ...numberMobile];
console.log("🚀 ~ concatNumberArray:", concatNumberArray);
