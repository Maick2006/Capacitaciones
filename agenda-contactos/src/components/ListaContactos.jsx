const ListaContactos = ({ contactos, eliminarContacto }) => {
  if (contactos.length === 0) return <p>No hay contactos.</p>;

  return (
    <ul>
      {contactos.map((contacto, index) => (
        <li key={contacto.correo}>
          <strong>{contacto.nombre}</strong> - {contacto.correo} - {contacto.telefono}
          <button onClick={() => eliminarContacto(contacto.correo)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

export default ListaContactos;
