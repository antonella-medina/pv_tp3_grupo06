import { useState } from "react";

    const FormularioProyecto = ({ onAgregarProyecto }) => {
        const [formulario, setFormulario] = useState({
            titulo: "",
            categoria: "",
            estado: "En curso", 
            descripcion: "",
            integranteNombre: "",
            integranteRol: "",
            recursos: ""
        });
            
        const { titulo, categoria, estado, descripcion, integranteNombre, integranteRol, recursos } = formulario;
            
            const handleChange = (e) => {
                const { name, value } = e.target;
                setFormulario({ ...formulario, [name]: value });
                console.log(formulario);
            };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (titulo.trim() === "") return;

        const nuevoProyecto = {
            titulo, 
            categoria, 
            estado, 
            descripcion: descripcion || "Sin descripción disponible.",
            recursos: recursos ? [recursos] : [],
            equipo: integranteNombre ? [{ nombre: integranteNombre, rol: integranteRol || "Integrante" }] : []
        };

        /*pasa el objeto al componente padre*/
        onAgregarProyecto(nuevoProyecto);
        setFormulario({ titulo: "",categoria: "", estado: "En curso", descripcion: "",
        integranteNombre: "", integranteRol: "", recursos: "" });
    };
                
    return (
        <section className="form-section">
            <h3>Agregar Nuevo Proyecto</h3>
            <form onSubmit={handleSubmit} className="project-form">
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
                <select name="estado" value={estado} onChange={handleChange} className="form-select">
                  <option value="En curso">En curso</option>
                  <option value="Finalizado">Finalizado</option>
                  <option value="Pendiente">Pendiente</option>
                </select>
              </div>

            <div className="form-row-full">
                <textarea
                name="descripcion"
                placeholder="Descripción del proyecto"
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
  );
};

export default FormularioProyecto;
