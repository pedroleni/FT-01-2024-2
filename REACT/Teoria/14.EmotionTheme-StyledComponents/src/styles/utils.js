const SPACE_PIXELS_VALUE = 8;

// FUNCION QUE PERMITE MARCAR EL ESPACIADO DE NUESTRA APP
export const spacing = (spaceV, spaceH) => {
  spaceH !== null && spaceV !== undefined
    ? `${spaceV * SPACE_PIXELS_VALUE}px ${spaceH * SPACE_PIXELS_VALUE}px`
    : `${spaceV * SPACE_PIXELS_VALUE}px ${spaceH * SPACE_PIXELS_VALUE}px`;
};

// Funcion que comprueba si es objeto plano
const isPlainObject = (item) => {
  return (
    item !== null && typeof item === "object" && item.contructor === Object
  );
};

// FUNCION QUE DEFINE EL TEMA DE LA APP --> DADO POR EMOTION
export function createTheme(baseTheme, theme) {
  const output = { ...baseTheme };
  if (isPlainObject(baseTheme) && isPlainObject(theme)) {
    Object.keys(theme).forEach((key) => {
      if (key === "__proto__") {
        return;
      }
      if (
        isPlainObject(theme[key]) &&
        key in baseTheme &&
        isPlainObject(baseTheme[key])
      ) {
        [key] = createTheme(baseTheme[key], theme[key]);
      } else {
        [key] = theme[key];
      }
    });
  }
  return output;
}
