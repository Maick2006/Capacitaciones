import { useState, useEffect } from 'react';

const FormularioContacto = ({ agregarContacto, contactos }) => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [error, setError] = useState('');

  const validarCorreo = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !correo || !telefono) {
      setError('Todos los campos son obligatorios.');
      return;
    }
    if (!validarCorreo(correo)) {
      setError('Correo no válido.');
      return;
    }
    if (contactos.some(contacto => contacto.correo === correo)) {
      setError('Ya existe un contacto con ese correo.');
      return;
    }

    agregarContacto({ nombre, correo, telefono });
    setNombre('');
    setCorreo('');
    setTelefono('');
    setError('');
  };

  const camposValidos = nombre && validarCorreo(correo) && telefono;

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="email"
        placeholder="Correo"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Teléfono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
      />
      <button type="submit" disabled={!camposValidos}>
        Agregar
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default FormularioContacto;
