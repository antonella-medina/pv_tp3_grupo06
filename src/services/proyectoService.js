export const proyectoService = {
    // Esta es tu lógica del Integrante C
    buscarProyecto: (texto, lista) => {
        if (!texto) return lista;
        return lista.filter(proy => 
            proy.titulo.toLowerCase().includes(texto.toLowerCase())
        );
    }
};