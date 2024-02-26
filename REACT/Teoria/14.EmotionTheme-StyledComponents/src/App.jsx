import { ThemeProvider } from "@emotion/react";
import { createTheme } from "./styles/utils";
import { useThemeApp } from "./context/ThemeContext";
import { themeDark, themeLight } from "./styles/theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ButtonStyle } from "./components/buttonStyled/ButtonStyle";
import { H1Custom } from "./components/h1Custom/H1Custom";
import { FlexContainer } from "./components/flexContainer/FlexContainer";

export const App = () => {
  const { theme, toggleTheme } = useThemeApp();
  return (
    <>
      <ThemeProvider
        theme={createTheme(theme == "dark" ? themeDark : themeLight)}
      >
        <GlobalStyles />
        <ButtonStyle variant="large">
          <div onClick={toggleTheme}>Cambiar tema</div>
        </ButtonStyle>

        <H1Custom text="H1 Custom" width="large" />

        <FlexContainer flexDir="column" gap="100px">
          <H1Custom text="H1 Custom" width="small" color="blue" />
          <H1Custom text="H1 Custom" width="large" />
        </FlexContainer>

        <ButtonStyle variant="">
          <div>Prueba</div>
        </ButtonStyle>
      </ThemeProvider>
    </>
  );
};
