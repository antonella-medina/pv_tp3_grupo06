import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Importe el BrowserRouter de la librería react-router-dom
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Envolvemos la App con el proveedor de rutas */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)