import proyectoService from "../services/proyectoService";
import { useState, useEffect, useRef } from "react"; 
import ProyectoCard from "./ProyectoCard.jsx"; 
// Saqué el import de DetalleProyecto porque ahora se maneja por su propia ruta en App.jsx
import FormularioProyecto from "./FormularioProyecto.jsx";
import RegistroActividad from "./RegistroActividad.jsx";

const ListaProyecto = () => {
  const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
  const [busqueda, setBusqueda] = useState("");
  
  // Mantengo intacto el estado de la fecha de la Parte 3
  const [fechaActualizacion, setFechaActualizacion] = useState(null);

  // Mantengo nuestras banderas con useRef tal cual las dejamos funcionando
  const esCargaInicial = useRef(true);
  const esBusqueda = useRef(false);

  /* Se recibe el proyecto hijo */
  const handleAgregarProyectoPadre = (nuevoProyecto) => {
    esBusqueda.current = false; 
    proyectoService.agregarProyecto(nuevoProyecto);
    setProyectos(proyectoService.obtenerProyectos());
  };

  const handleEliminar = (id) => {
    esBusqueda.current = false; 
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.obtenerProyectos());
  };

  const handleBusqueda = (e) => {
    const valor = e.target.value;
    setBusqueda(valor);
    esBusqueda.current = true; 
    setProyectos(proyectoService.buscarProyecto(valor));
  };

  // Mantengo nuestro efecto secundario optimizado idéntico al de antes
  useEffect(() => {
    if (esCargaInicial.current) {
      esCargaInicial.current = false;
      return;
    }

    if (esBusqueda.current) {
      return; 
    }

    const ahora = new Date();
    const dia = String(ahora.getDate()).padStart(2, "0");
    const mes = String(ahora.getMonth() + 1).padStart(2, "0");
    const anio = ahora.getFullYear();
    const horas = String(ahora.getHours()).padStart(2, "0");
    const minutos = String(ahora.getMinutes()).padStart(2, "0");
    const fechaFormateada = `${dia}/${mes}/${anio} a las ${horas}:${minutos} hs.`;
  
    setFechaActualizacion(fechaFormateada);
  }, [proyectos]);

  // Acá volé el "if (proyectoSeleccionado)" que hacía el renderizado condicional, 
  // porque el detalle ahora se muestra de forma independiente cambiando de pantalla por la URL.

  return (
    <div className="lista-proyecto-container">
      <h2>Gestión de Proyectos Educativos</h2>
      
      {/* Gestion de filtro de busqueda */}
      <section className="search-section">
            <input
            type="text"
            placeholder="Buscar por titulo..."
            value={busqueda}
            onChange={handleBusqueda}
            className="search-input"
            style={{ color: '#000000' }}
            />  
      </section>

      <FormularioProyecto onAgregarProyecto={handleAgregarProyectoPadre}/>

      {/* Listado de tarjetas */}
      <div className="grid-proyectos"> 
        {proyectos.map (p => (
            <ProyectoCard 
            key={p.id} 
            proyecto={p} 
            /* Acá le saqué la prop onVerDetalle a la tarjeta porque ahora 
               cada una maneja su navegación interna con su propio link dinámico */
            onEliminar={handleEliminar}/>
        ))}
      </div>

      <RegistroActividad fecha={fechaActualizacion} />
    </div>
  );
};

export default ListaProyecto;