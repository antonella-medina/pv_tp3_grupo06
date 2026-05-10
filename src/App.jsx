import { useState } from 'react'
import Header from './components/Header'
import { proyectoService } from './services/proyectoService'
import './App.css'

function App() {
  // Datos de prueba
  const proyectosIniciales = [
    { id: 1, titulo: "Laboratorio de Sistemas" },
    { id: 2, titulo: "Programación Visual" },
    { id: 3, titulo: "Informática Básica" }
  ];

  const [proyectosFiltrados, setProyectosFiltrados] = useState(proyectosIniciales);

  const manejarBusqueda = (texto) => {
    // Usamos tu servicio
    const resultado = proyectoService.buscarProyecto(texto, proyectosIniciales);
    setProyectosFiltrados(resultado);
  };

  return (
    <div className="App">
      <Header onBuscar={manejarBusqueda} />
      <main style={{ padding: '20px' }}>
        <h2>Lista de Proyectos</h2>
        <ul>
          {proyectosFiltrados.map(p => (
            <li key={p.id} style={{ fontSize: '1.2rem', margin: '10px 0' }}>
              {p.titulo}
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default App