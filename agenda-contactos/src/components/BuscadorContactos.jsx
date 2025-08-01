const BuscadorContactos = ({ filtro, setFiltro }) => {
  return (
    <input
      type="text"
      placeholder="Buscar por nombre o correo"
      value={filtro}
      onChange={(e) => setFiltro(e.target.value)}
    />
  );
};

export default BuscadorContactos;
