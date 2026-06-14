import React, { createContext, useState, useEffect } from "react";

//  Se crea el contexto
export const UsuarioContext = createContext();

//  Se crea el Provider
export const UsuarioProvider = ({ children }) => {
  // Inicializamos el estado leyendo el localStorage
  const [usuario, setUsuario] = useState(() => {
  const usuarioGuardado = localStorage.getItem("usuario");
  return usuarioGuardado ? JSON.parse(usuarioGuardado) : {
    nombre: "Luis Pérez",
    dni: "12345678",
    rol: "Alumno",
    institucion: "Universidad Nacional de Jujuy"
  };
  });

  // Guardamos en el localStorage cada vez que el usuario cambia
  useEffect(() => {
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }, [usuario]);

  const actualizarPerfil = (datosActualizados) => {
    setUsuario(datosActualizados); 
  };

  return (
    <UsuarioContext.Provider value={{ usuario, actualizarPerfil }}>
      {children}
    </UsuarioContext.Provider>
  );
};
