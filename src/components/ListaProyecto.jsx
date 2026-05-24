import proyectoService from "../services/proyectoService";
import {useState} from "react";
import ProyectoCard from "./ProyectoCard.jsx"; 
import DetalleProyecto from "./DetalleProyecto.jsx";
import FormularioProyecto from "./FormularioProyecto.jsx";

const ListaProyecto =() => {
  const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
  const [busqueda, setBusqueda] = useState("");
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

    /*recibimos el proyecto hijo */
    const handleAgregarProyectoPadre = (nuevoProyecto) => {
      proyectoService.agregarProyecto(nuevoProyecto);
      setProyectos(proyectoService.obtenerProyectos());
    };

    const handleEliminar = (id) => {
        proyectoService.eliminarProyecto(id);
        setProyectos(proyectoService.obtenerProyectos());
    };
    const handleBusqueda = (e) =>{
      const valor = e.target.value;
      setBusqueda(valor);
      setProyectos(proyectoService.buscarProyecto(valor));
    };

    const handleVerDetalle = (id) => {
      const proyecto = proyectoService.obtenerProyectoPorId(id);
      setProyectoSeleccionado(proyecto);
    }

    /*renderizado condicional para la vista de detalle */
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
      
      {/*Gestion de filtro de busqueda*/}
      <section className="search-section">
            <input
            type="text"
            placeholder="Buscar por titulo..."
            value={busqueda}
            onChange={handleBusqueda}
            className="search-input"
            />  
      </section>

      <FormularioProyecto onAgregarProyecto={handleAgregarProyectoPadre}/>

        {/*Listado de tarjetas */}
        <div className="grid-proyectos"> 
          {proyectos.map (p => (
              <ProyectoCard 
              key={p.id} 
              proyecto={p} 
              onVerDetalle={handleVerDetalle} 
              onEliminar={handleEliminar}/>
          ))}

        </div>
        </div>

  );
}
export default ListaProyecto;