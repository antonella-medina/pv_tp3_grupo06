import React from "react";

const RegistroActividad =({fecha}) => {
    return(
        <div className="registro-actividad">
            <p>
                <strong>Ultima Actualizacion de la Lista:</strong> {fecha} 
            </p>
        </div>
    )
}
export default RegistroActividad;