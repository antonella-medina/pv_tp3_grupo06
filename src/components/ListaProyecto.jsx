import React, { useState } from 'react';
import { proyectoService } from '../services/proyectoService';

function ListaProyectos() {
  const [proyectos, setProyectos] = useState([]);

  const mostrarProyectos = () => {
    const lista = proyectoService.obtenerProyectos();
    setProyectos(lista);
  };

  return (
    <div>
      <h1>Lista de Proyectos</h1>
      
      <button 
        onClick={mostrarProyectos}
        style={{
          fontSize: '1.2rem',
          margin: '12px',
          padding: '12px 24px',
          backgroundColor: 'green',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        Mostrar Proyectos
      </button>
        <h2>
      <ul>
        {proyectos.map(proy => (
          <li key={proy.id}>
            {proy.id}. {proy.titulo} - {proy.categoria} ({proy.estado})
          </li>
        ))}
      </ul>
        </h2>
    </div>
  );
}

export default ListaProyectos;
