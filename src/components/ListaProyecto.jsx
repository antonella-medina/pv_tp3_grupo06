import proyectoService from "../services/proyectoService";
// 1. IMPORTANTE: Se agrego useRef al import
import { useState, useEffect, useRef } from "react"; 
import ProyectoCard from "./ProyectoCard.jsx"; 
import DetalleProyecto from "./DetalleProyecto.jsx";
import FormularioProyecto from "./FormularioProyecto.jsx";
import RegistroActividad from "./RegistroActividad.jsx";

const ListaProyecto = () => {
  const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
  const [busqueda, setBusqueda] = useState("");
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
  
  // 2. Se inicializo el estado de la fecha en null para que no aparezca al principio
  const [fechaActualizacion, setFechaActualizacion] = useState(null);

  // 3. SE CREO LAS BANDERAS CON useRef
  // esCargaInicial evitará que el cartel se dibuje al cargar la página por primera vez
  const esCargaInicial = useRef(true);
  // esBusqueda evitará que escribir en el input altere la fecha de modificación
  const esBusqueda = useRef(false);

  /* Se recibe el proyecto hijo */
  const handleAgregarProyectoPadre = (nuevoProyecto) => {
    esBusqueda.current = false; // Se avisa que esto Es un Alta real, no una búsqueda
    proyectoService.agregarProyecto(nuevoProyecto);
    setProyectos(proyectoService.obtenerProyectos());
  };

  const handleEliminar = (id) => {
    esBusqueda.current = false; // Se avisa que esto Es una Baja real, no una búsqueda
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.obtenerProyectos());
  };

  const handleBusqueda = (e) => {
    const valor = e.target.value;
    setBusqueda(valor);
    esBusqueda.current = true; // 4. Se avisa que el cambio en 'proyectos' es solo por BUSQUEDA
    setProyectos(proyectoService.buscarProyecto(valor));
  };

  const handleVerDetalle = (id) => {
    const proyecto = proyectoService.obtenerProyectoPorId(id);
    setProyectoSeleccionado(proyecto);
  };

  // 5. EFECTO SECUNDARIO OPTIMIZADO CON LAS BANDERAS
  useEffect(() => {
    // CONDICIÓN A: Si es la primera vez que arranca la app, salta la ejecución
    if (esCargaInicial.current) {
      esCargaInicial.current = false;
      return;
    }

    // CONDICIÓN B: Si el cambio de estado fue provocado por el buscador, lo ignora
    if (esBusqueda.current) {
      return; 
    }

    // Si pasó los dos filtros anteriores, significa que fue un ALTA o BAJA real. Formatea la fecha:
    const ahora = new Date();
    const dia = String(ahora.getDate()).padStart(2, "0");
    const mes = String(ahora.getMonth() + 1).padStart(2, "0");
    const anio = ahora.getFullYear();
    const horas = String(ahora.getHours()).padStart(2, "0");
    const minutos = String(ahora.getMinutes()).padStart(2, "0");
    const fechaFormateada = `${dia}/${mes}/${anio} a las ${horas}:${minutos} hs.`;
  
    setFechaActualizacion(fechaFormateada);
  }, [proyectos]); // Sigue escuchando proyectos, pero ahora filtrando inteligentemente por las referencias
  
  /* renderizado condicional para la vista de detalle */
  if (proyectoSeleccionado){
    return(
      <DetalleProyecto
        proyecto={proyectoSeleccionado} 
        onCerrar={() => setProyectoSeleccionado(null)}
      />
    );
  }

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
            onVerDetalle={handleVerDetalle} 
            onEliminar={handleEliminar}/>
        ))}
      </div>

      <RegistroActividad fecha={fechaActualizacion} />
    </div>
  );
};

export default ListaProyecto;