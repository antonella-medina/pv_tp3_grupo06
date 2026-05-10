import { useState } from 'react'
import Header from './components/Header'
import Footer from "./components/Footer";
import ListaProyectos from './components/ListaProyecto'; // ojo al nombre correcto
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

  const manejarBusqueda = (texto) => {
    const resultado = proyectoService.buscarProyecto(texto, proyectosIniciales);
    setProyectosFiltrados(resultado);
  };

  const manejarEliminar = (id) => {
    const listaNueva = proyectoService.eliminarProyecto(id, proyectosFiltrados);
    setProyectosFiltrados(listaNueva);
  };

  return (
    <div className="App">
      <Header onBuscar={manejarBusqueda} />
      <main style={{ padding: '20px' }}>
        <h2>Lista de Proyectos (filtrados)</h2>
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
