const AnchorOPCION2 = ({
  enlace,
  tar,
  source,
  alterna,
  classi = "clasePorSiSeMeOlvida",
}) => {
  // N O ME HACE FALTA HACER EL DESTRUYCTURING AQUI ABAJO
  return (
    <a href={enlace} target={tar}>
      <img src={source} className={classi} alt={alterna} />
    </a>
  );
};

export default AnchorOPCION2;
