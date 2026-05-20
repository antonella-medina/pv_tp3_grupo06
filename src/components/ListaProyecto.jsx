import proyectoService from "../services/proyectoService";
import {useState} from "react";
import ProyectoCard from "./ProyectoCard.jsx"; 
import DetalleProyecto from "./DetalleProyecto.jsx";

const ListaProyecto =() => {
  const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
  const [busqueda, setBusqueda] = useState("");
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
  
    const [formulario, setFormulario] = useState({
      titulo:"",
      categoria:"",
      estado:"En curso", //valor por defecto
      descripcion: "",
      integranteNombre: "",
      integranteRol: "",
      recursos: ""
    });

    const { titulo, categoria, estado, descripcion, integranteNombre, integranteRol, recursos} = formulario;

    const handleChange = (e) =>{
      const {name, value}=e.target;
      setFormulario({...formulario, [name]: value});
      console.log(formulario);
    };

    const handleAgregar = (e) => {
    e.preventDefault();
    if (titulo === "") return;

    const nuevoProyecto = {
        titulo,
        categoria,
        estado,
        descripcion: descripcion || "Sin descripción disponible.",
        recursos: recursos ? [recursos] : [],
        equipo: integranteNombre ? [{ nombre: integranteNombre, rol: integranteRol || "Integrante" }] : []
    };

    /*Guardamos el nuevo proyecto estructurado*/
    proyectoService.agregarProyecto(nuevoProyecto);
    setFormulario({ titulo: "", categoria: "", estado: "En curso", descripcion: "",
      integranteNombre: "", integranteRol: "", recursos: "" });
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

      {/*Formulario para alta de proyecto */}
      <section className="form-section">
          <h3>Agregar Nuevo Proyecto</h3>
          <form onSubmit={handleAgregar} className="project-form">
              <div className="form-row-triple">
                <input
                type="text"
                name="titulo"
                placeholder="Titulo del proyecto"
                value={titulo}
                onChange={handleChange}
                className="form-input"
                required
                />
                <input
                type="text"
                name="categoria"
                placeholder="Categoria"
                value={categoria}
                onChange={handleChange}
                className="form-input"
                required
                />
                <select name="estado" value={formulario.estado} onChange={handleChange} className="form-select" >
                  <option value="En curso">En curso</option>
                  <option value="Finalizado">Finalizado</option>
                  <option value="Pendiente">Pendiente</option>
                </select>
              </div> 

              <div className="form-row-full">
                  <textarea
                  name="descripcion"
                  placeholder="Descripción del proyecto (Se sugiere armar un texto lindo de dos párrafos)"
                  value={descripcion}
                  onChange={handleChange}
                  className="form-input form-textarea"
                  />
              </div>

              <div className="form-row-rest">
                  <input
                  type="text"
                  name="integranteNombre"
                  placeholder="Nombre del Integrante"
                  value={integranteNombre}
                  onChange={handleChange}
                  className="form-input"
                  />
                  <input
                  type="text"
                  name="integranteRol"
                  placeholder="Rol del Integrante (ej: Programador)"
                  value={integranteRol}
                  onChange={handleChange}
                  className="form-input"
                  />
                  <input
                  type="text"
                  name="recursos"
                  placeholder="Recurso Inicial (ej: Manual PDF)"
                  value={recursos}
                  onChange={handleChange}
                  className="form-input"
                  />
              </div>

                <button type="submit" className="btn-submit">Guardar Proyecto</button>
          </form>
      </section>

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