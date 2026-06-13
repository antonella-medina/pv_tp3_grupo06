import { Container, Typography, Paper, List, ListItem, ListItemText } from "@mui/material";
// Importe el contexto global para conectar la vista
import { UsuarioContext } from "../context/UsuarioContext";
import { useContext } from "react";

const PerfilUsuario = () => {
  // Extraigo el usuario real del estado global en vez de usar datos fijos
  const { usuario } = useContext(UsuarioContext);

  return (
    <Container>
      <Typography variant="h4" gutterBottom sx={{ mt: 4, color: "black", fontWeight: "bold" }}>
        Perfil del Usuario
      </Typography>

      <Paper elevation={3} sx={{ p: 3 }}>
        {/* Vinculé los campos al contexto dinámico global. 
            También agregué el campo DNI que pide la consigna del trabajo. */}
        <List>
          <ListItem>
            <ListItemText primary="Nombre" secondary={usuario?.nombre} />
          </ListItem>
          <ListItem>
            <ListItemText primary="DNI" secondary={usuario?.dni} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Rol" secondary={usuario?.rol} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Institución" secondary={usuario?.institucion} />
          </ListItem>
        </List>
        
        {/* Dejo la anotación para que acá abajo agreguen su botón de edición */}
      </Paper>
    </Container>
  );
};

export default PerfilUsuario;