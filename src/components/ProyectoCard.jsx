import React from 'react';
// Importe Link para poder navegar dinámicamente al detalle usando el ID en la URL
import { Link } from 'react-router-dom';

const ProyectoCard = ({ proyecto, onEliminar }) => {
    const { id, titulo, categoria, estado } = proyecto;
    
    return (
         <article className="card">
            <div className="card-content">
                <h3>{titulo}</h3>
                <span className={`badge ${estado === 'Finalizado' ? 'done' : 'process'}`}>
                    {estado}
                </span>
                <p>
                    <strong>Categoria</strong>
                    {categoria}
                </p>
            </div>
            
            <div>
                {/* Actualicé el path del Link a '/detalle/' para que coincida 
                    exactamente con la estructura de rutas que definieron en App.jsx.
                */}
                <Link to={`/detalle/${id}`} className="btn-detail" style={{ textDecoration: 'none', display: 'inline-block' }}>
                    Ver Detalle
                </Link>
                
                {/* El botón de eliminar se mantiene igual con su prop correspondiente */}
                <button className="btn-delete" onClick={() => onEliminar(id)}>Eliminar</button>
            </div>
         </article>
    );
}

export default ProyectoCard;