import { Container, Typography, Paper, List, ListItem, ListItemText } from "@mui/material";
import { UsuarioContext } from "../context/UsuarioContext";
import { useContext, useState } from "react";

const PerfilUsuario = () => {
  const usuario = {
    nombre: "Luis Pérez",
    rol: "Alumno",
    institucion: "Universidad Nacional de Jujuy"
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom sx={{ mt: 4, color:"black" }}>
        Perfil del Usuario
      </Typography>

      <Paper elevation={3} sx={{ p: 3 }}>
        <List>
          <ListItem>
            <ListItemText primary="Nombre" secondary={usuario.nombre} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Rol" secondary={usuario.rol} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Institución" secondary={usuario.institucion} />
          </ListItem>
        </List>
      </Paper>
    </Container>
  );
};

export default PerfilUsuario;
