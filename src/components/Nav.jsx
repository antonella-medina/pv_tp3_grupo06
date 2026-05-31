import React from 'react';
// Importo NavLink para manejar los enlaces de navegación de forma interna en la SPA
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        {/* Cambié las etiquetas <a> tradicionales por <NavLink> y actualicé 
          las rutas de "to" para que enganchen justo con las rutas que declaré en App.jsx.
        */}
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/proyectos">Proyectos</NavLink>
        </li>
        <li>
          <NavLink to="/perfil">Mi Perfil</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;