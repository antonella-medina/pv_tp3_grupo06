import { useState } from 'react'
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ListaProyecto from './components/ListaProyecto.jsx'; 
import DetalleProyecto from './components/DetalleProyecto.jsx';
import proyectoService from './services/proyectoService';
import "./css/styles.css";
import "./css/ListaProyecto.css";

// Sumé las herramientas de React Router para controlar la navegación
import { Routes, Route, Navigate } from 'react-router-dom';

{/* les agregué estilos inline de color oscuro (#111 y #333) a estas vistas provisorias 
    para que se lean perfecto en la pantalla y no queden camufladas en gris claro. */}
const Dashboard = () => (
  <div className="lista-proyecto-container" style={{ padding: '20px' }}>
    <h2 style={{ color: '#111111' }}>📊 Dashboard Principal</h2>
    <p style={{ marginTop: '10px', color: '#333333', fontWeight: '500' }}>
      Bienvenido al panel de administración de la plataforma.
    </p>
  </div>
);

const PerfilUsuario = () => (
  <div className="lista-proyecto-container" style={{ padding: '20px' }}>
    <h2 style={{ color: '#111111' }}>👤 Perfil de Usuario</h2>
    <p style={{ marginTop: '10px', color: '#333333', fontWeight: '500' }}>
      Configuración de la cuenta e información del alumno.
    </p>
  </div>
);

const DetalleProyectoProvisional = () => (
  <div className="lista-proyecto-container" style={{ padding: '20px' }}>
    <h2 style={{ color: '#111111' }}>🔍 Detalle del Proyecto</h2>
    <p style={{ marginTop: '10px', color: '#333333', fontWeight: '500' }}>
      Aquí se visualizarán los datos específicos capturados desde la URL.
    </p>
  </div>
);

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Nav/>

      {/* Mantengo nuestra clase "content-area" intacta para que no se desarme la estética visual */}
      <main className="content-area">
        {/* Metí el contenedor de rutas dentro del main para controlar qué se dibuja según la URL */}
        <Routes>
          {/* Si entran directo a la raíz, obligo a que redirija al dashboard */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* Nuestra lista general de proyectos ahora se renderiza solo en la ruta /proyectos */}
          <Route path="/proyectos" element={<ListaProyecto />} />
          
          {/* Declaré la ruta dinámica con el parámetro ":id" listo para el detalle */}
          <Route path="/proyectos/:id" element={<DetalleProyectoProvisional />} />
          
          {/* Ruta asignada para la sección de perfil */}
          <Route path="/perfil" element={<PerfilUsuario />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  ); 
} 

export default App;