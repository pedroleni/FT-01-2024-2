import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { useMemo } from "react";
import { getVariants } from "./utils";

// Estilos que va a tener el boton --> envoltorio

// mediaquerys entre corchetes
const ButtonWrapper = styled.button(({ variant, theme }) => ({
  cursor: "pointer",
  outline: "none",
  margin: theme.spacing(2),
  ...variant,
  [`${theme.mediaquery.tablet}`]: {
    margin: theme.spacing(4),
  },
  [`${theme.mediaquery.desktop}`]: {
    margin: theme.spacing(6),
  },
}));

// Creamos el componente boton con los estilos anteriores
export const ButtonStyle = ({ children, variant }) => {
  // Traemos el tema utilizando useTheme de emotion react
  const theme = useTheme();

  // use memo para que se renderice de nuevo cuando cambie el tema o cuando cambie la variante
  const buttonStyles = useMemo(
    () => getVariants(theme, variant),
    [theme, variant]
  );

  return <ButtonWrapper variant={buttonStyles}>{children}</ButtonWrapper>;
};
