import React from 'react';

// Recibe el objeto proyecto completo por props
const ProyectoCard = ({ proyecto, onEliminar, onVerDetalle }) => {
    
    // --- TU PARTE / PARTE 2: Desestructuración de propiedades ---
    const { id, titulo, categoria, estado } = proyecto;

    // Definimos un color según el estado para que visualmente se vea excelente
    const colorEstado = estado === 'Finalizado' ? '#4caf50' : estado === 'En curso' ? '#ff9800' : '#2196f3';

    return (
        <div className="proyecto-card" style={{
            border: '1px solid #444',
            borderRadius: '8px',
            padding: '16px',
            width: '280px',
            background: '#1a1a1a',
            color: '#fff',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            textAlign: 'left'
        }}>
            <div>
                <h4 style={{ margin: '0 0 10px 0', fontSize: '1.2rem', color: '#646cff' }}>{titulo}</h4>
                <p style={{ margin: '5px 0', fontSize: '0.9rem', color: '#ccc' }}>
                    <strong>Categoría:</strong> {categoria}
                </p>
                <p style={{ margin: '5px 0', fontSize: '0.9rem' }}>
                    <strong>Estado:</strong> <span style={{ color: colorEstado, fontWeight: 'bold' }}>{estado}</span>
                </p>
            </div>

            <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                <button 
                    onClick={() => onVerDetalle(proyecto)} // Le pasamos el proyecto completo para ver el detalle extendido
                    style={{
                        flex: 1,
                        padding: '6px 12px',
                        backgroundColor: '#333',
                        color: 'white',
                        border: '1px solid #555',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Ver Detalle
                </button>
                <button 
                    onClick={() => onEliminar(id)} // Usamos el id desestructurado
                    style={{
                        padding: '6px 12px',
                        backgroundColor: '#E53935',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default ProyectoCard;