import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material";

const Dashboard = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ color: "black" }}>
          Bienvenido al Dashboard
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ color: "black" }}>
          Aquí encontrarás un resumen general de tus proyectos y métricas clave.
        </Typography>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6">Total de proyectos</Typography>
                <Typography variant="h4">12</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6">Proyectos en curso</Typography>
                <Typography variant="h4">5</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Dashboard;
