import { useState } from 'react'
import Header from './components/Header'
import Footer from "./components/Footer";
import ListaProyectos from './components/ListaProyecto'; 
import { proyectoService } from './services/proyectoService'
import "./css/styles.css";
import './App.css'

function App() {
  const proyectosIniciales = [
    { id: 1, titulo: "Laboratorio de Sistemas" },
    { id: 2, titulo: "Programación Visual" },
    { id: 3, titulo: "Informática Básica" },
    { id: 4, titulo: "Base de Datos II" },
    { id: 5, titulo: "Estructura de Datos" }
  ];

  const [proyectosFiltrados, setProyectosFiltrados] = useState(proyectosIniciales);
  const [nuevoTitulo, setNuevoTitulo] = useState("");
  const [nuevaCategoria, setNuevaCategoria] = useState("");
  const [nuevoEstado, setNuevoEstado] = useState("");

  const manejarBusqueda = (texto) => {
    const resultado = proyectoService.buscarProyecto(texto, proyectosIniciales);
    setProyectosFiltrados(resultado);
  };

  const manejarEliminar = (id) => {
    const listaNueva = proyectoService.eliminarProyecto(id, proyectosFiltrados);
    setProyectosFiltrados(listaNueva);
  };

  const manejarAgregar = () => {
    const nuevos = proyectoService.agregarProyecto({
      titulo: nuevoTitulo,
      categoria: nuevaCategoria,
      estado: nuevoEstado
    });
    setProyectosFiltrados([...nuevos]);
    setNuevoTitulo("");
    setNuevaCategoria("");
    setNuevoEstado("");
  };

  return (
    <div className="App">
      <Header onBuscar={manejarBusqueda} />

      {/* El Nav le toca al Integrante B*/}
      <nav>
          <ul><li></li></ul>
      </nav>

      <main style={{ padding: '20px' }}>
        <h2>Lista de Proyectos (filtrados)</h2>

        {/* Formulario para agregar */}
        <input
          type="text"
          placeholder="Título"
          value={nuevoTitulo}
          onChange={(e) => setNuevoTitulo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Categoría"
          value={nuevaCategoria}
          onChange={(e) => setNuevaCategoria(e.target.value)}
        />
        <input
          type="text"
          placeholder="Estado"
          value={nuevoEstado}
          onChange={(e) => setNuevoEstado(e.target.value)}
        />
        <button onClick={manejarAgregar}>Agregar Proyecto</button>

        <ul>
          {proyectosFiltrados.map(p => (
            <li key={p.id} style={{ fontSize: '1.2rem', margin: '10px 0' }}>
              {p.titulo}
              <button 
                onClick={() => manejarEliminar(p.id)}
                style={{ marginLeft: '20px', color: 'red', cursor: 'pointer' }}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
        <ListaProyectos />
      </main>
      <Footer />
    </div>
  ); 
} 

export default App;
