import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  // Inicializamos el estado en lazy
  const [theme, setTheme] = useState(() => {
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark";
  });

  // funcion para cambiar de tema --> si tiene dark lo quita y pone light y si tiene light pone dark
  const toggleTheme = () => {
    setTheme((preTheme) => {
      if (preTheme == "dark") {
        localStorage.setItem("theme", "light");
        return "light";
      } else {
        localStorage.setItem("theme", "dark");
        return "dark";
      }
    });
  };

  // Al renderizar hay que añadir la clase al body cada vez que cambie el theme
  useEffect(() => {
    // añadimos la clase al body
    if (theme == "dark") {
      document.body.className = "dark";
    }

    document.body.className = localStorage.getItem("theme");
  }, [theme]);

  // Proveemos de valores al contexto
  // Solo queremos que se vuelva a renderizar el valor cuando cambie el valor del theme
  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useThemeApp = () => {
  return useContext(ThemeContext);
};
