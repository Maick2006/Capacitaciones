import { useEffect, useState } from 'react';
import FormularioContacto from './FormularioContacto';
import ListaContactos from './ListaContactos';
import BuscadorContactos from './BuscadorContactos';

const AgendaApp = () => {
  const [contactos, setContactos] = useState([]);
  const [filtro, setFiltro] = useState('');

  // Cargar desde localStorage
  useEffect(() => {
    const contactosGuardados = JSON.parse(localStorage.getItem('contactos')) || [];
    setContactos(contactosGuardados);
  }, []);

  // Guardar en localStorage
  useEffect(() => {
    localStorage.setItem('contactos', JSON.stringify(contactos));
  }, [contactos]);

  const agregarContacto = (nuevoContacto) => {
    setContactos([...contactos, nuevoContacto]);
  };

  const eliminarContacto = (correo) => {
    const nuevosContactos = contactos.filter(contacto => contacto.correo !== correo);
    setContactos(nuevosContactos);
  };

  const contactosFiltrados = contactos.filter((c) =>
    c.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
    c.correo.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div>
      <h1>Agenda de Contactos</h1>
      <BuscadorContactos filtro={filtro} setFiltro={setFiltro} />
      <FormularioContacto agregarContacto={agregarContacto} contactos={contactos} />
      <ListaContactos contactos={contactosFiltrados} eliminarContacto={eliminarContacto} />
    </div>
  );
};

export default AgendaApp;
