import { useState } from 'react'
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ListaProyecto from './components/ListaProyecto.jsx'; 
import DetalleProyecto from './components/DetalleProyecto.jsx';
import proyectoService from './services/proyectoService';
import "./css/styles.css";
import "./css/ListaProyecto.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard.jsx";
import PerfilUsuario from "./views/PerfilUsuario.jsx";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />

        <main className="content-area">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/perfil" element={<PerfilUsuario />} />
            <Route path="/proyectos" element={<ListaProyecto />} />
            <Route path="/detalle/:id" element={<DetalleProyecto />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  ); 
} 

export default App;
