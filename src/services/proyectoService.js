export const proyectoService = {
    proyectos: [
        { id: 1, titulo: "Diseño de Base de Datos para una Biblioteca", categoria: "Base de Datos II", estado: "En curso",
            Descripción: "Este proyecto consiste en el diseño y modelado de una base de datos relacional orientada a la administración eficiente de una biblioteca. El objetivo principal es centralizar la información de los ejemplares, autores y categorías para facilitar la búsqueda.\n\nAsimismo, el sistema integra un módulo de control para socios y registros de préstamos. El propósito es automatizar la trazabilidad de cada libro, registrando fechas de salida y devolución para evitar pérdidas.",
            Recursos: ["Introduccion al diseño (PDF)", "Modelo Entidad-Relacion (PDF)", "Normalización (PDF)"],
            Equipo: [
                {nombre: "Marcos Tolaba", rol: "Diseño de Usuarios"},
                {nombre: "Elena Machaca", rol: "Catálogo de Libros"}
            ]
        },
        { id: 2, titulo: "Traduccion Tecnica Ingles III", categoria: "Idiomas", estado: "Finalizado",
            Descripción: "Proyecto enfocado en la traducción y adaptación de manuales técnicos de hardware y software del inglés al español. Busca compilar un glosario de términos específicos de IT.\n\nEl documento final servirá como material de consulta para las materias de programación de los primeros años de la carrera.",
            recursos: ["Manual Técnico (PDF)", "Glosario (Drive)"],
            equipo: [
                { nombre: "Matias Esquivel", rol: "Traductor Principal" }
            ]
        },
        { id: 3, titulo: "Calculadora en C", categoria: "Programación", estado: "Finalizado",
            descripcion: "Desarrollo de una aplicación de consola en lenguaje C que implementa las operaciones matemáticas básicas y funciones avanzadas como potencia y raíz cuadrada. El enfoque principal estuvo en el control de errores lógicos, como la división por cero.\n\nEl código se estructuró de manera modular utilizando funciones independientes para cada operación. Esto facilita el mantenimiento del software y permite una futura escalabilidad para operaciones científicas.",
            recursos: ["Código Fuente (PDF)", "Guía de Operaciones (PDF)"],
            equipo: [
                { nombre: "Abril Solis", rol: "Programador Principal" },
                { nombre: "Valentina Paz", rol: "Tester de Código" }
            ]          
         },
        { id: 4, titulo: "Instalacion de Linux Debian", categoria: "Sistemas Operativos", estado: "En curso",
            Descripción: "Configuración y despliegue de un sistema operativo Linux Debian mediante el uso de máquinas virtuales en VirtualBox. El proyecto abarca desde la asignación de recursos de hardware virtualizado hasta el particionamiento manual del disco.\n\nActualmente se trabaja en la etapa de post-instalación, ejecutando comandos esenciales en la terminal. El objetivo final es configurar los permisos de usuarios, grupos y habilitar servicios de red seguros.",
            Recursos: ["Guía de Instalación (PDF)", "Script de Consola (Drive)"],
            Equipo: [
                { nombre: "Matias Esquivel", rol: "Administrador de Red" }
            ]
         },
        { id: 5, titulo: "Lista de Nombres Ordenada", categoria: "Programación", estado: "Finalizado", 
            descripcion: "Implementación de un algoritmo en lenguaje estructurado para el ordenamiento dinámico de una lista de nombres. Se utilizó una estructura de datos basada en listas enlazadas simples para optimizar el uso de la memoria.\n\nEl programa lee los registros de entrada, los almacena de forma dinámica y aplica el método de ordenamiento correspondiente. El resultado final se muestra ordenado alfabéticamente a través de la consola del sistema.",
            recursos: ["Estructura de Datos (PDF)"],
            equipo: [
                { nombre: "Abril Solis", rol: "Diseñador del Algoritmo" }
            ]
         }
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