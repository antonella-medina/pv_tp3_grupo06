import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Paper, Chip, Grid, List, ListItem, ListItemText } from '@mui/material';
import proyectoService from '../services/proyectoService';

const DetalleProyecto = () => {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const proyecto = proyectoService.obtenerProyectoPorId(parseInt(id));

    if (!proyecto) {
        return (
            <Paper sx={{ p: 4, m: 2, textAlign: 'center' }}>
                <Typography variant="h5" color="error">Proyecto no encontrado.</Typography>
                <Button sx={{ mt: 2 }} onClick={() => navigate('/proyectos')}>Volver</Button>
            </Paper>
        );
    }

const { titulo, categoria, estado, descripcion, recursos, equipo } = proyecto;

return (
    <Paper elevation={3} sx={{ p: 4, m: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h4">{titulo}</Typography>
            <Chip label={estado} color={estado === 'Finalizado' ? 'success' : 'primary'} />
        </Box>
        <Typography variant="body1" sx={{ mb: 1 }}><strong>Categoría:</strong> {categoria}</Typography>
        <Typography variant="body1" sx={{ mb: 4 }}><strong>Descripción:</strong> {descripcion || "Sin descripción disponible."}</Typography>

        <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
                <Typography variant="h6" sx={{ borderBottom: '1px solid #ccc', pb: 1 }}>Integrantes del Equipo</Typography>
                <List>
                    {Array.isArray(equipo) && equipo.length > 0 ? (
                        equipo.map((miembro, index) => (
                            <ListItem key={index} disablePadding sx={{ py: 1 }}>
                                <ListItemText 
                                    primary={miembro.nombre || miembro} 
                                    secondary={miembro.rol || "Integrante"} 
                                />
                            </ListItem>
                        ))
                    ) : (
                        <Typography color="text.secondary" sx={{ mt: 2 }}>No hay integrantes asignados todavía.</Typography>
                    )}
                </List>
            </Grid>

            <Grid item xs={12} md={6}>
                <Typography variant="h6" sx={{ borderBottom: '1px solid #ccc', pb: 1 }}>Recursos Asignados</Typography>
                <List>
                    {Array.isArray(recursos) && recursos.length > 0 ? (
                        recursos.map((recurso, index) => (
                            <ListItem key={index} disablePadding sx={{ py: 1 }}>
                                <ListItemText primary={recurso.nombre || recurso} />
                            </ListItem>
                        ))
                    ) : (
                        <Typography color="text.secondary" sx={{ mt: 2 }}>Sin recursos cargados.</Typography>
                    )}
                </List>
            </Grid>
        </Grid>

        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="outlined" onClick={() => navigate('/proyectos')}>
                Volver a la lista
            </Button>
        </Box>
    </Paper>
    
  );
};

export default DetalleProyecto;