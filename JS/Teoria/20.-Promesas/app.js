const addItem = (item, list) => {
  const promise = new Promise((resolve, reject) => {
    if (!list) {
      reject("no tengo el listado para poder meter el nuevo item");
    } else {
      setTimeout(() => {
        list.push(item);
        resolve(list);
      }, 3000);
    }
  });

  return promise;
};

const listFruit = ["apple", "lemon", "pinapple"];

addItem("granada")
  .then((res) => console.log(`El listado actualizado es ${res}`))
  .catch((error) => console.log(error));
