import styled from "@emotion/styled";

const ContainerStayled = styled.div`
  display: flex;
  flex-direction: ${({ flexDir }) => flexDir};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: center;
  gap: ${({ gap }) => gap};
  width: ${({ wth }) => wth};
`;

// creamos componente

export const FlexContainer = ({
  children,
  flexDir,
  justifyContent,
  gap,
  wth,
}) => {
  return (
    <ContainerStayled
      flexDir={flexDir}
      justifyContent={justifyContent}
      gap={gap}
      wth={wth}
    >
      {children}
    </ContainerStayled>
  );
};
