import { useState } from "react";
import { Box, TextField, Button, MenuItem, Select, InputLabel, FormControl, Typography, Paper, Grid, Alert } from '@mui/material';

    const FormularioProyecto = ({ onAgregarProyecto }) => {
        const [formulario, setFormulario] = useState({
            titulo: "",
            categoria: "",
            estado: "En curso", 
            descripcion: "",
            integranteNombre: "",
            integranteRol: "",
            recursos: ""
        });

        const [error, setError] = useState(false);
            
        const { titulo, categoria, estado, descripcion, integranteNombre, integranteRol, recursos } = formulario;
            
            const handleChange = (e) => {
                const { name, value } = e.target;
                setFormulario({ ...formulario, [name]: value });
            };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (titulo.trim() === "") {
            setError(true);
            return;
        }
        setError(false);

        const nuevoProyecto = {
            titulo, 
            categoria, 
            estado, 
            descripcion: descripcion || "Sin descripción disponible.",
            recursos: recursos ? [recursos] : [],
            equipo: integranteNombre ? [{ nombre: integranteNombre, rol: integranteRol || "Integrante" }] : []
        };

        /*pasa el objeto al componente padre*/
        onAgregarProyecto(nuevoProyecto);
        setFormulario({ titulo: "",categoria: "", estado: "En curso", descripcion: "",
        integranteNombre: "", integranteRol: "", recursos: "" });
    };
                
    return(
        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
            <Typography variant="h5" gutterBottom>Agregar Nuevo Proyecto</Typography>
            
            {error && <Alert severity="error" sx={{ mb: 2 }}>El título del proyecto es obligatorio.</Alert>}
            
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <TextField fullWidth label="Título del proyecto" name="titulo" value={titulo} onChange={handleChange} required />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField fullWidth label="Categoría" name="categoria" value={categoria} onChange={handleChange} required />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormControl fullWidth>
                            <InputLabel>Estado</InputLabel>
                            <Select name="estado" value={estado} label="Estado" onChange={handleChange}>
                                <MenuItem value="En curso">En curso</MenuItem>
                                <MenuItem value="Finalizado">Finalizado</MenuItem>
                                <MenuItem value="Pendiente">Pendiente</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>

                <TextField fullWidth multiline rows={3} label="Descripción del proyecto" name="descripcion" value={descripcion} onChange={handleChange} />

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <TextField fullWidth label="Nombre del Integrante" name="integranteNombre" value={integranteNombre} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField fullWidth label="Rol del Integrante (ej: Programador)" name="integranteRol" value={integranteRol} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField fullWidth label="Recurso Inicial (ej: Manual PDF)" name="recursos" value={recursos} onChange={handleChange} />
                    </Grid>
                </Grid>

                <Button type="submit" variant="contained" color="primary" sx={{ alignSelf: 'flex-start', mt: 2 }}>
                    Guardar Proyecto
                </Button>
            </Box>
        </Paper>
    );
};

export default FormularioProyecto;
