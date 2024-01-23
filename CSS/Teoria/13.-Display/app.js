/**
 * EJEMPLO DE RENDERIZADO CONDICIONAL
 *
 * Esto se hace para no tener que poner a los elementos por css displayu none sino que se
 * rendericen en funcion de cuando se necesiten
 *
 */

/**
 * Vamos a crear un boton que se encarga dde borrar o pintar el div en funcion si esta o no
 * esta en el body
 *
 * Lo creamos con create elemenet y le metemos el texto y su clase
 *
 */
const button = document.createElement("button");
button.textContent = "toggle render";
button.classList.add("btn");

/** le metemos el evento de tipo click para cuando le clickemos evaluemos si el div
 * esta pintado o no esta pintado
 */
button.addEventListener("click", () => {
  /**Con el querySelectorAll vamos a ver cuantos div estan pintados porque nos devuelve 
     * una especie de array llamado node list que unicamente se recorre con el forEach porque
     * en el prototype no esta contemplado otro metodo 
     
     */
  const divRender = document.querySelectorAll("div");
  console.log("divRender", divRender);

  /** creamos el elemento que pintaremos en caso de que el div este borrado */
  const divTwo = document.createElement("div");
  divTwo.classList.add("div-two");

  /** Ahora evaluamos con un ternario si el div esta pintado o esta borrado
   * Esto lo hacemos con la coonstante que sacamos del querySelectorAll que nos devolvio
   * un array. Si este array tiene solo un elemento, esto quiere decir que ese div esta borrado
   *
   * Si esta borrado lo que haremos con el appendChild es pintarlo
   *
   * Si el div esta, por que que sera el length de divRender de dos en ese caso lo borramos
   * para borrarlo lo buscamos con el  document.querySelector(".div-two") y despues el metodo remove()
   */
  divRender.length === 1
    ? button.insertAdjacentElement("beforebegin", divTwo)
    : document.querySelector(".div-two").remove();
});

/** opor ultimo una vez metida la logica del boton lo pintamos en el dom */
document.body.appendChild(button);
