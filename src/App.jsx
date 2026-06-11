import { useState } from 'react'
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ListaProyecto from './components/ListaProyecto.jsx'; 
import DetalleProyecto from './components/DetalleProyecto.jsx';
import proyectoService from './services/proyectoService';
import "./css/styles.css";
import "./css/ListaProyecto.css";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Dashboard from "./views/Dashboard.jsx";
import PerfilUsuario from "./views/PerfilUsuario.jsx";
import { UsuarioProvider } from './context/UsuarioContext.jsx';

const App = () => {
  return (
    <UsuarioProvider>
    <Router>
      <div className="App">
        <Header />
        <Nav />

        <main className="content-area">
          <Routes>
            <Route path="/" element={
              <div style={{ textAlign: "center", padding: "50px", 
                backgroundColor: "#f5f5f5", 
                borderRadius: "10px", 
                margin: "40px auto",
                maxWidth: "800px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
              }}>
                <h2 style={{ color: "#1976d2", marginBottom: "15px", fontSize: "2rem" }}>
                  ¡Bienvenido a la Plataforma de Proyectos Educativos!
                </h2>
                <p style={{ color: "#555555", fontSize: "1.2rem", margin: "0" }}>
                  Seleccioná una opción en la barra de navegación para comenzar.
                </p>
              </div>
            } />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/perfil" element={<PerfilUsuario />} />
            <Route path="/proyectos" element={<ListaProyecto />} />
            <Route path="/detalle/:id" element={<DetalleProyecto />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
    </UsuarioProvider>
  ); 
} 

export default App;
