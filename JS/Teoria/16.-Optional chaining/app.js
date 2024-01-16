// el optional chaining sirve para que no rompa el codigo cuando no tengo accesible una propiedad de un objecto
// ----> optional chaining "?"
const superheroes = [
  {
    name: "Wolverine",
    type: "Mutant",
    power: {
      number: 23,
    },
  },
  {
    name: "Hulk",
    type: "Human",
  },
  {
    name: "Magneto",
    type: "Mutant",
    power: {
      number: 3534,
    },
  },
  {
    name: "Iron Man",
    type: "Human",
  },
];

superheroes.map((superheroe, index) =>
  console.log(
    `El heroe ${superheroe.name} tiene el power ${
      superheroe.power?.number ?? 0
    }`
  )
);
