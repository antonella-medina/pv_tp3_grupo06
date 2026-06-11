import React, { createContext, useState } from "react";

//  Se crea el contexto
export const UsuarioContext = createContext();

//  Se crea el Provider
export const UsuarioProvider = ({ children }) => {
  // Estado centralizado con datos iniciales simulados
  const [usuario, setUsuario] = useState({
    nombre: "Luis Pérez",
    dni: "12345678",
    rol: "Alumno",
    institucion: "Universidad Nacional de Jujuy"
  });

  // Función para actualizar el perfil
  const actualizarPerfil = (datosActualizados) => {
    setUsuario(datosActualizados); 
  };

  return (
    <UsuarioContext.Provider value={{ usuario, actualizarPerfil }}>
      {children}
    </UsuarioContext.Provider>
  );
};
