import React from 'react';

const Header = ({ onBuscar }) => {
    return (
        <header style={{ 
            padding: '1rem', 
            background: '#20232a', 
            color: 'white', 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center' 
        }}>
            <h1>Gestor Proyectos de Proyectos Educativos</h1>
            <input 
                type="text" 
                placeholder="Buscar por título..." 
                onChange={(e) => onBuscar(e.target.value)}
                style={{ padding: '8px', borderRadius: '4px', width: '250px' }}
            />
        </header>
    );
};

export default Header;