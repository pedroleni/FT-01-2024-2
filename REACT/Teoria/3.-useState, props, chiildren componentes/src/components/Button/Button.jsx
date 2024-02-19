const Button = ({ funcionSeteadora, valorDelEstado, saludar }) => {
  return (
    <button
      onClick={() => {
        funcionSeteadora((valorActual) => valorActual + 1);
        saludar();
      }}
    >
      Count is {valorDelEstado}
    </button>
  );
};

export default Button;
