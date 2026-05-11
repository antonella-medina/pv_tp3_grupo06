import React, { useState } from "react";
import { proyectoService } from "./services/proyectoService";

function ListaProyectos() {
  const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
  const [nuevoTitulo, setNuevoTitulo] = useState("");
  const [nuevaCategoria, setNuevaCategoria] = useState("");
  const [nuevoEstado, setNuevoEstado] = useState("");

  const agregarProyecto = () => {
    const nuevos = proyectoService.agregarProyecto({
      titulo: nuevoTitulo,
      categoria: nuevaCategoria,ddddddddddddd
      estado: nuevoEstado
    });
    setProyectos([...nuevos]); 
    setNuevoTitulo("");
    setNuevaCategoria("");
    setNuevoEstado("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Título"
        value={nuevoTitulo}
        onChange={(e) => setNuevoTitulo(e.target.value)}
      />
      <input
        type="text"
        placeholder="Categoría"
        value={nuevaCategoria}
        onChange={(e) => setNuevaCategoria(e.target.value)}
      />
      <input
        type="text"
        placeholder="Estado"
        value={nuevoEstado}
        onChange={(e) => setNuevoEstado(e.target.value)}
      />
      <button onClick={agregarProyecto}>Agregar Proyecto</button>

      <ul>
        {proyectos.map((p) => (
          <li key={p.id}>
            {p.id} - {p.titulo} ({p.categoria}) [{p.estado}]
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaProyectos;