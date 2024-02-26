// Damos unos estilos

import styled from "@emotion/styled";

const H1Styles = styled.h1`
  background-color: ${({ color }) => color};
  text-align: center;
  width: ${({ width }) =>
    width == "largo"
      ? "500px"
      : width == "medio"
      ? "300px"
      : width == "small" && "150px"};
`;

// Creamos el componente

export const H1Custom = ({ text, width, color }) => {
  return (
    <H1Styles width={width} color={color}>
      {text}
    </H1Styles>
  );
};
