import React from "react";

function DetalleProyecto({ proyecto }) {
  if (!proyecto) return null; // si no hay proyecto seleccionado, no muestra nada

  return (
    <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px" }}>
      <h3>{proyecto.titulo}</h3>
      <p><strong>Descripción:</strong> {proyecto.descripcion}</p>

      <p><strong>Recursos:</strong></p>
      <ul>
        {proyecto.recursos.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>

      <p><strong>Equipo:</strong></p>
      <ul>
        {proyecto.equipo.map((e, i) => (
          <li key={i}>{e.nombre} - {e.rol}</li>
        ))}
      </ul>
    </div>
  );
}

export default DetalleProyecto;
