import React from 'react';

const DetalleProyecto = ({ proyecto, onCerrar }) => {
  if (!proyecto) return null;

  const { titulo, categoria, estado, descripcion, recursos, equipo } = proyecto;

  return (
    <div className="detalle-container">
      <div className="detalle-card">
        
        {/* Encabezado */}
        <div className="detalle-header">
            <h2>{titulo}</h2>
            <span className={`badge ${estado === 'Finalizado' ? 'done' : 'process'}`}>
              {estado}
            </span>
        </div>

        {/* Info Principal */}
        <div className="detalle-info">
            <p><strong>Categoría:</strong> {categoria}</p>
            <p><strong>Descripción:</strong> {descripcion || "Sin descripción disponible."}</p>
        </div>

        {/* Grilla de Equipo y Recursos */}
        <div className="detalle-grid">
            
            {/* Sección Integrantes */}
            <div className="detalle-seccion">
                <h4>Integrantes del Equipo</h4>
                {Array.isArray(equipo) && equipo.length > 0 ? (
                    <ul>
                        {equipo.map((miembro, index) => (
                            <li key={index}>
                                {typeof miembro === 'object' && miembro !== null ? (
                                    <span><strong>{miembro.nombre}</strong> - {miembro.rol}</span>
                                ) : (
                                    <span>{miembro}</span>
                                )}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-muted">No hay integrantes asignados todavía.</p>
                )}
            </div>

            {/* Sección Recursos */}
            <div className="detalle-seccion">
                <h4>Recursos Asignados</h4>
                {Array.isArray(recursos) && recursos.length > 0 ? (
                    <ul>
                        {recursos.map((recurso, index) => (
                            <li key={index}>
                                {typeof recurso === 'object' && recurso !== null ? (
                                    <span>{recurso.nombre || JSON.stringify(recurso)}</span>
                                ) : (
                                    <span>{recurso}</span>
                                )}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-muted">Sin recursos cargados.</p>
                )}
            </div>

        </div>

        {/* Botón Volver */}
        <div className="detalle-footer">
            <button className="btn-volver" onClick={onCerrar}>
                Volver a la lista
            </button>
        </div>

      </div>
    </div>
  );
};

export default DetalleProyecto;