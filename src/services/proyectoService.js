export const proyectoService = {
    proyectos: [
        { id: 1, titulo: "Diseño de Base de Datos para una Biblioteca", categoria: "Base de Datos II", estado: "En curso" },
        { id: 2, titulo: "Traduccion Tecnica Ingles III", categoria: "Idiomas", estado: "Finalizado" },
        { id: 3, titulo: "Calculadora en C", categoria: "Programación", estado: "Finalizado" },
        { id: 4, titulo: "Instalacion de Linux Debian", categoria: "Sistemas Operativos", estado: "En curso" },
        { id: 5, titulo: "Lista de Nombres Ordenada", categoria: "Programación", estado: "Finalizado" }
    ],

    //Obtener proyecto 


    //Agregar proyecto


    eliminarProyecto: function(id, lista) {
        return lista.filter(proy => proy.id !== id);
    },

    // Esta es tu lógica del Integrante C
    buscarProyecto: (texto, lista) => {
        if (!texto) return lista;
        return lista.filter(proy => 
            proy.titulo.toLowerCase().includes(texto.toLowerCase())
        );
    }
};