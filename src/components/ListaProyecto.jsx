import React, { useState } from 'react';
import { proyectoService } from '../services/proyectoService';
import ProyectoCard from './ProyectoCard'; // Se importo el componente tarjeta

function ListaProyectos({ onVerDetalle }) {
  const [proyectos, setProyectos] = useState([]);

  // Desestructuración en el manejo de estados del formulario
  // Se creo un único objeto de estado para el formulario
  const [formulario, setFormulario] = useState({
    titulo: '',
    categoria: '',
    estado: 'En curso',
    descripcion: '',
    recursos: '',
    integranteNombre: '',
    integranteRol: ''
  });

  // Se desestructuro el objeto para usar sus variables limpias en los inputs
  const { titulo, categoria, estado, descripcion, recursos, integranteNombre, integranteRol } = formulario;

  const manejarCambioInput = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value
    });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!titulo || !categoria) return alert('Por favor, completa título y categoría.');

    // Se estructuro el nuevo proyecto
    const nuevoProyecto = {
      titulo,
      categoria,
      estado,
      descripcion: descripcion || "Sin descripción disponible.",
      recursos: recursos ? recursos.split(',').map(r => r.trim()) : [],
      equipo: integranteNombre ? [{ nombre: integranteNombre, rol: integranteRol || 'Integrante' }] : []
    };

    // Se agrego el proyecto usando el servicio oficial del grupo y se actualizo la lista
    const listaActualizada = proyectoService.agregarProyecto(nuevoProyecto);
    setProyectos([...listaActualizada]);

    // Se reseteo el formulario vaciando el objeto
    setFormulario({ titulo: '', categoria: '', estado: 'En curso', descripcion: '', recursos: '', integranteNombre: '', integranteRol: '' });
  };
  // --------------------------------------------------------------------------

  const mostrarProyectos = () => {
    // Como tus compañeros no crearon obtenerProyectos(), 
    // leemos directamente el arreglo 'proyectos' que tienen guardado.
    if (proyectoService.proyectos) {
      setProyectos(proyectoService.proyectos);
    } else if (typeof proyectoService.obtenerProyectos === 'function') {
      const lista = proyectoService.obtenerProyectos();
      setProyectos(lista);
    } else {
      alert("No se encontró la lista de proyectos en el servicio.");
    }
  };

  const manejarEliminar = (id) => {
    const listaFiltrada = proyectoService.eliminarProyecto(id, proyectos);
    setProyectos(listaFiltrada);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Gestión de Proyectos</h1>
      
      {/* Formulario de Alta con estados desestructurados */}
      <form onSubmit={manejarEnvio} style={{ background: '#2a2a2a', padding: '20px', borderRadius: '8px', marginBottom: '30px', textAlign: 'left', maxWidth: '600px', margin: '0 auto 30px auto' }}>
        <h3 style={{ color: '#646cff', marginTop: 0 }}>Agregar Nuevo Proyecto</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
          <input type="text" name="titulo" placeholder="Título del proyecto" value={titulo} onChange={manejarCambioInput} style={{ padding: '8px' }} />
          <input type="text" name="categoria" placeholder="Categoría" value={categoria} onChange={manejarCambioInput} style={{ padding: '8px' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <select name="estado" value={estado} onChange={manejarCambioInput} style={{ padding: '8px', width: '100%' }}>
            <option value="En curso">En curso</option>
            <option value="Finalizado">Finalizado</option>
            <option value="Pendiente">Pendiente</option>
          </select>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <textarea name="descripcion" placeholder="Descripción del proyecto..." value={descripcion} onChange={manejarCambioInput} rows="2" style={{ padding: '8px', width: '100%', resize: 'vertical' }}></textarea>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input type="text" name="recursos" placeholder="Recursos (Separados por coma. Ej: Manual PDF, Link Drive)" value={recursos} onChange={manejarCambioInput} style={{ padding: '8px', width: '100%' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '15px' }}>
          <input type="text" name="integranteNombre" placeholder="Nombre Integrante" value={integranteNombre} onChange={manejarCambioInput} style={{ padding: '8px' }} />
          <input type="text" name="integranteRol" placeholder="Rol Integrante" value={integranteRol} onChange={manejarCambioInput} style={{ padding: '8px' }} />
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Guardar Proyecto</button>
      </form>

      <button 
        onClick={mostrarProyectos}
        style={{
          fontSize: '1.2rem',
          margin: '12px',
          padding: '12px 24px',
          backgroundColor: '#646cff',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        Cargar Listado Inicial
      </button>

      {/* --- .map() implementando el componente ProyectoCard --- */}
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
        {proyectos.map(proy => (
          // En lugar de un <li> ordinario, se renderizo la tarjeta pasando el objeto completo por prop
          <ProyectoCard 
            key={proy.id} 
            proyecto={proy} 
            onEliminar={manejarEliminar}
            onVerDetalle={onVerDetalle}
          />
        ))}
      </div>
    </div>
  );
}

export default ListaProyectos;