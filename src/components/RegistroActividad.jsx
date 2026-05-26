import React from "react";

const RegistroActividad = ({ fecha }) => {
    // Si no hay fecha (carga inicial), el componente no se muestra en pantalla
    if (!fecha) return null;

    return (
        <div className="registro-actividad">
            <p>
                <strong>Última Actualización de la Lista:</strong> {fecha} 
            </p>
        </div>
    );
};

export default RegistroActividad;