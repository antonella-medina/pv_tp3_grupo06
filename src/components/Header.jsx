import React, { useContext } from 'react';
// Importe el contexto global de usuario para conectar el encabezado
import { UsuarioContext } from '../context/UsuarioContext';

const Header = ({ onBuscar }) => {
  // Extraigo el objeto 'usuario' de nuestro estado centralizado
  const { usuario } = useContext(UsuarioContext);

  return (
    <header className="header">
      <h1>Plataforma de Proyectos Académicos</h1>
      {/* Agregue el signo de pregunta (usuario?.nombre) como protección. 
          Así, si el localStorage tarda un milisegundo en levantar los datos o arranca vacío, 
          la app no se cuelga ni tira pantalla en blanco, y muestra los datos dinámicos apenas estén listos. */}
      <div className="user-info-header" style={{ fontSize: '0.95rem', fontWeight: '500' }}>
        {usuario ? (
          <span>👋 Bienvenido, <strong>{usuario.nombre}</strong> ({usuario.rol})</span>
        ) : (
          <span>Cargando usuario...</span>
        )}
      </div>
    </header>
  );
};

export default Header;