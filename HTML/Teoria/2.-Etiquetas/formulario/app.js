const buttonVisibility = document.getElementById("changeVisibility");
console.log(buttonVisibility);

// METEMOS EL MANEJADOR DEL EVENTO

buttonVisibility.addEventListener("click", (e) => {
  e.preventDefault();
  const inputPassword = document.getElementById("password");
  inputPassword["type"] == "text"
    ? (inputPassword.type = "password")
    : (inputPassword.type = "text");

  setTimeout(() => {
    inputPassword.type = "password";
  }, 3000);
});

/** 
buttonVisibility.addEventListener("mousedown", () => {
  const inputPassword = document.getElementById("password");
  inputPassword.type = "text";
});

buttonVisibility.addEventListener("mouseup", () => {
  const inputPassword = document.getElementById("password");
  inputPassword.type = "password";
});


*/
