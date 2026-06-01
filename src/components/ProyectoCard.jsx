import { Card, CardContent, CardActions, Typography, Button, Chip } from '@mui/material';
import { Link } from 'react-router-dom';
const ProyectoCard = ({ proyecto, onEliminar }) => {
    const {id, titulo, categoria, estado} = proyecto;
    
    return(
            <Card variant="outlined" sx={{ mb: 2, display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                <CardContent>
                    <Typography variant="h6" component="h3" gutterBottom>
                        {titulo}
                    </Typography>
                
                    <Chip 
                        label={estado} 
                        color={estado === 'Finalizado' ? 'success' : 'primary'} 
                        size="small" 
                        sx={{ mb: 1.5 }} 
                    />
                
                    <Typography variant="body2" color="text.secondary">
                        <strong>Categoría:</strong> {categoria}
                    </Typography>
                </CardContent>
            
                <CardActions>
                    <Button component={Link} to={`/detalle/${id}`} size="small" variant="contained">
                        Ver Detalle
                    </Button>
                    <Button size="small" color="error" onClick={() => onEliminar(id)}>
                        Eliminar
                    </Button>
                </CardActions>
            </Card>
    );
}

export default ProyectoCard;