import { useState } from 'react'
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ListaProyecto from './components/ListaProyecto.jsx'; 
import DetalleProyecto from './components/DetalleProyecto.jsx';
import proyectoService from './services/proyectoService';
import "./css/styles.css";
import "./css/ListaProyecto.css";

const App = () => {
  
  return (
    <div className="App">
      <Header/>
      <Nav/>

      <main className="content-area">
  
        <ListaProyecto/>
      </main>
      <Footer />
    </div>
  ); 
} 

export default App;
