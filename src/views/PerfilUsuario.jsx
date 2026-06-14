import { Container, Typography, Paper, List, ListItem, ListItemText, Button, TextField} from "@mui/material";
// Importe el contexto global para conectar la vista
import { UsuarioContext } from "../context/UsuarioContext";
import { useContext, useState } from "react";

const PerfilUsuario = () => {
  // Extraigo el usuario real del estado global en vez de usar datos fijos y la funcion para actulizarlo desde el contexto globlal
  const { usuario, actualizarPerfil } = useContext(UsuarioContext);

  // Estado local para controlar si la pantalla esta en modo edicion o modo lectura
  const [editando, setEditando] = useState(false);

  const [formulario, setFormulario ] =useState({ ...usuario});

  // Función que se ejecuta al hacer clic en "editar perfil"
  const handleEditar = (e) => {
    e.preventDefault();
    setFormulario({ ...usuario});
    // Activamos el modo edición para que se muestren los inputs
    setEditando(true);
  };

  // Función que detecta cada letra que el usuario escribe en los inputs y la guarda en formData
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,          // Mantiene los campos que no se están tocando
      [name]: value        // Modifica dinámicamente el campo que cambió (nombre, dni, etc.)
    });
  };

  // función que se ejecuta al presionar "Guardar Cambios"
  const handleGuardar = (e) => {
    e.preventDefault(); // Evita que la página se recargue por el comportamiento del formulario
    actualizarPerfil(formulario); //impacta los datos en toda la app
    setEditando(false);    // apagamos el modo edición para volver a la vista de lectura
  };
  
  return (
    <Container>
      <Typography variant="h4" gutterBottom sx={{ mt: 4, color: "black", fontWeight: "bold" }}>
        Perfil del Usuario
      </Typography>

      <Paper elevation={3} sx={{ p: 3 }}>
        {/* Vinculé los campos al contexto dinámico global. 
            También agregué el campo DNI que pide la consigna del trabajo. */}
        
        {/* Envolvemos la lista en un formulario para manejar el guardado ordenadamente */}
        <form onSubmit={handleGuardar}>
          <List>
            {/* CAMPO: NOMBRE */}
            <ListItem>
              {editando ? (
                <TextField
                  fullWidth
                  label="Nombre"
                  name="nombre"
                  value={formulario.nombre}
                  onChange={handleChange}
                  variant="outlined"
                />
              ) : (
                <ListItemText primary="Nombre" secondary={usuario?.nombre} />
              )}
            </ListItem>

            {/* CAMPO: DNI */}
            <ListItem>
              {editando ? (
                <TextField
                  fullWidth
                  label="DNI"
                  name="dni"
                  value={formulario.dni}
                  onChange={handleChange}
                  variant="outlined"
                />
              ) : (
                <ListItemText primary="DNI" secondary={usuario?.dni} />
              )}
            </ListItem>

            {/* CAMPO: ROL */}
            <ListItem>
              {editando ? (
                <TextField
                  fullWidth
                  label="Rol"
                  name="rol"
                  value={formulario.rol}
                  onChange={handleChange}
                  variant="outlined"
                />
              ) : (
                <ListItemText primary="Rol" secondary={usuario?.rol} />
              )}
            </ListItem>

            {/* CAMPO: INSTITUCIÓN */}
            <ListItem>
              {editando ? (
                <TextField
                  fullWidth
                  label="Institución"
                  name="institucion"
                  value={formulario.institucion}
                  onChange={handleChange}
                  variant="outlined"
                />
              ) : (
                <ListItemText primary="Institución" secondary={usuario?.institucion} />
              )}
            </ListItem>
          </List>
  </form>
          {/* SECCIÓN DE BOTONES DINÁMICOS */}
          <div style={{ marginTop: "16px", display: "flex", gap: "12px" }}>
            {editando ? (
              <>
                {/* Al ser tipo 'submit', activa automáticamente la función handleGuardar del formulario */}
                <Button type="submit" variant="contained" color="primary" onClick={handleGuardar}>
                  Guardar Cambios
                </Button>

                {/* Botón para arrepentirse de los cambios y volver atrás */}
                <Button type="button" variant="outlined" color="secondary" onClick={() => setEditando(false)}>
                  Cancelar
                </Button>
              </>
            ) : (

              // Si no está editando, muestra el botón principal para abrir el formulario
              <Button type="button" variant="contained" color="primary" onClick={handleEditar}>
                Editar Perfil
              </Button>

            )}
          </div>
        
      </Paper>
    </Container>
  );
};
export default PerfilUsuario;