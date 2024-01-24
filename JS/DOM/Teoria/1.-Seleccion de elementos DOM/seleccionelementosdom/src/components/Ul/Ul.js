const template = () => `
    <ul>
        <li>Numero 1</li>
        <li>Numero 2</li>
        <li>Numero 3</li>
    </ul>


`;

export const PrintUl = () =>
  (document.querySelector("#app").innerHTML += template());
