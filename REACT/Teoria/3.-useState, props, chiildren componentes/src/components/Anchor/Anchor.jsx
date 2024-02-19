const Anchor = (props) => {
  const {
    enlace,
    tar,
    source,
    alterna,
    classi = "clasePorSiSeMeOlvida",
  } = props;

  return (
    <a href={enlace} target={tar}>
      <img src={source} className={classi} alt={alterna} />
    </a>
  );
};

export default Anchor;
