import React, { useContext } from 'react';
import { UsuarioContext } from '../context/UsuarioContext';

// Componente Header: muestra el título de la plataforma y el nombre/rol del usuario
const Header = ({ onBuscar }) => {
    // useContext permite acceder al estado global definido en UsuarioContext
    // Aquí obtenemos el objeto usuario (nombre, rol, etc.)
  const { usuario } = useContext(UsuarioContext);

  return (
    <header className="header">
      <h1>Plataforma de Proyectos Académicos</h1>
      <p>Bienvenido, {usuario.nombre} ({usuario.rol})</p>
    </header>
  );
};

export default Header;
