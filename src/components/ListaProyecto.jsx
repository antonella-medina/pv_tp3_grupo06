import React, { useState } from 'react';
import { proyectoService } from '../services/proyectoService';
import DetalleProyecto from "./DetalleProyecto";

function ListaProyectos() {
  const [proyectos, setProyectos] = useState([]);
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null); // 👈 faltaba esto

  const mostrarProyectos = () => {
    const lista = proyectoService.obtenerProyectos();
    setProyectos(lista);
  };

  const verDetalles = (id) => {
    const proyecto = proyectoService.obtenerProyectoPorId(id);
    setProyectoSeleccionado(proyecto);
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

      <ul>
        {proyectos.map(proy => (
          <li key={proy.id}>
            {proy.id}. {proy.titulo} - {proy.categoria} ({proy.estado})
            <button 
              onClick={() => verDetalles(proy.id)} 
              style={{ marginLeft: "10px" }}
            >
              Ver detalles
            </button>
          </li>
        ))}
      </ul>

      {/* Pasamos el proyecto seleccionado como prop */}
      <DetalleProyecto proyecto={proyectoSeleccionado} />
    </div>
  );
}

export default ListaProyectos;
