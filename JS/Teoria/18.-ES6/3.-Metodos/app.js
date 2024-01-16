const { character } = require("./data");

///! ----------------------------------------------------------------------------
///? ------------------------------------MAP ------------------------------------
///! ----------------------------------------------------------------------------

const { results } = character;
const allCharacterMapeada = results.map((personaje, index) => ({
  index,
  name: personaje.name,
  image: personaje.image,
})); // tiene un return implicito

const allCharacterMapeadaTwo = results.map((personaje, index) => {
  return {
    index,
    name: personaje.name,
    image: personaje.image,
  };
}); // return explicito

///! ----------------------------------------------------------------------------
///? ------------------------------------filter ---------------------------------
///! ----------------------------------------------------------------------------
/// ---------> me filtra todos los que cumplan la condicion
/// ---------> devuelve un conjunto de elementos en un array
const allCharacterFilter = results.filter(
  (personaje, index) => personaje.status == "Dead"
);

///! ----------------------------------------------------------------------------
///? ------------------------------------find ---------------------------------
///! ----------------------------------------------------------------------------

// -------> devuelve un solo elemento sin un array
const allCharacterFind = results.find(
  (personaje, index) => personaje.status == "Dead"
);

console.log("🚀 ~ file: app.js:25 ~ allCharacterFind :", allCharacterFind);

///! ----------------------------------------------------------------------------
///? ------------------------------------EVERY---------------------------------
///! ----------------------------------------------------------------------------

// ds un true si todos cumplen con la condicion
const vegan = ["🥝", "🥝", "🥝", "🥝", "🍔", "🥝", "🥝", "🥝"];

const isVegan = vegan.every((item) => item === "🥝");
console.log("🚀 ~ file: app.js:44 ~ isVegan:", isVegan);

///! ----------------------------------------------------------------------------
///? ------------------------------------SOME ---------------------------------
///! ----------------------------------------------------------------------------

// da un true si al menos uno cumple con la condicion

const isVeganSome = vegan.some((item) => item === "🍔");
console.log("🚀 ~ file: app.js:55 ~ isVeganSome:", isVeganSome);

///! ----------------------------------------------------------------------------
///? ------------------------------------REDUCE---------------------------------
///! ----------------------------------------------------------------------------

const numbers = [5, 5, 5, 5, 5, 5];

const total = numbers.reduce((acc, num) => acc + num, 0);
console.log("🚀 ~ total:", total);

///TODO---------------------------------------------> EJERCICIO---------------------

// 8.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando
// .filter() y usa .reduce() para conseguir la media de sus .score.
// La función .find() también podría ayudarte para el contrar el genero 'RPG' en el
// array .gender.

const videogames = [
  { name: "Final Fantasy VII", genders: ["RPG"], score: 9.5 },
  { name: "Assasins Creed Valhala", genders: ["Aventura", "RPG"], score: 4.5 },
  { name: "The last of Us 2", genders: ["Acción", "Aventura"], score: 9.8 },
  { name: "Super Mario Bros", genders: ["Plataforma"], score: 8.5 },
  { name: "Genshin Impact", genders: ["RPG", "Aventura"], score: 7.5 },
  {
    name: "Legend of Zelda: Breath of the wild",
    genders: ["RPG", "La cosa más puto bonita que he visto nunca"],
    score: 10,
  },
];

const filterScore = videogames.filter((game, index) =>
  game.genders.find((genero, index) => genero === "RPG")
);
console.log("🚀 ~ filterScore:", filterScore);

const media = filterScore.reduce(
  (acc, game) => ({
    ...acc,
    totalScore: acc.totalScore + game.score,
    counter: acc.counter + 1,
  }),
  {
    totalScore: 0,
    counter: 0,
  }
);
console.log("🚀 ~  media:", media);

const mediaResult = media.totalScore / media.counter;
console.log("🚀 ~ mediaResult:", mediaResult);

// ---------> cuidado con hacerlo todo en linea
const totalScoreNew = videogames
  .filter((game, index) => game.genders.includes("RPG"))
  .reduce(
    (acc, game) => ({
      ...acc,
      totalScore: acc.totalScore + game.score,
      counter: acc.counter + 1,
    }),
    { totalScore: 0, counter: 0 }
  );
console.log("🚀 ~ file: app.js:106 ~ totalScoreNew:", totalScoreNew);
