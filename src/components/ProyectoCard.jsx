const ProyectoCard = ({ proyecto, onVerDetalle, onEliminar }) => {
    const {id, titulo, categoria, estado} = proyecto;
    
    return(
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
                    <button className="btn-detail" onClick ={() => onVerDetalle(id)}>Ver Detalle</button>
                    <button className="btn-delete" onClick={() => onEliminar(id)}>Eliminar</button>
                </div>
             </article>
    
    );
}

export default ProyectoCard;