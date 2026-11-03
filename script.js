
/* =====================================
   JAVASCRIPT - PÁGINA WEB DEL ITACE
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("¡Bienvenido a la página del ITACE!");

    // 1. MENÚ PRINCIPAL
    const enlacesMenu = document.querySelectorAll(".menu a");

    enlacesMenu.forEach(function (enlace) {
        enlace.addEventListener("click", function () {
            enlacesMenu.forEach(function (otroEnlace) {
                otroEnlace.classList.remove("activo");
            });

            this.classList.add("activo");
        });
    });


    // 2. ANIMACIÓN DE LAS SECCIONES
    const secciones = document.querySelectorAll("main .seccion");

    if ("IntersectionObserver" in window) {
        const observador = new IntersectionObserver(
            function (entradas) {
                entradas.forEach(function (entrada) {
                    if (entrada.isIntersecting) {
                        entrada.target.classList.add("visible");
                        observador.unobserve(entrada.target);
                    }
                });
            },
            { threshold: 0.12 }
        );

        secciones.forEach(function (seccion) {
            seccion.classList.add("revelar");
            observador.observe(seccion);
        });
    }


    // 3. BOTÓN PARA VOLVER ARRIBA
    const botonInicio = document.getElementById("volverArriba");

    if (botonInicio) {
        window.addEventListener("scroll", function () {
            botonInicio.classList.toggle(
                "visible",
                window.scrollY > 300
            );
        });

        botonInicio.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }


    // 4. DIRECTORIO DOCENTE
    const docentes = [
        {
            nombre: "Bertha Alicia Zapata Aldape",
            materias: "Matemáticas",
            semestres: "1 y 3",
            estudios: "Doctorado",
            lugar: "C-6",
            area: "general"
        },
        {
            nombre: "Carlos Melecio Carmona Olivares",
            materias: "Módulo profesional de Diseño Gráfico e Inglés",
            semestres: "1 y 3",
            estudios: "Licenciatura en Diseño Gráfico y Maestría en Educación Básica",
            lugar: "Laboratorio 2",
            area: "general"
        },
        {
            nombre: "Erik Ramírez Solís",
            materias: "Pensamiento Matemático",
            semestres: "1, 3 y 5",
            estudios: "Ingeniería Electromecánica y Maestría en Educación",
            lugar: "C-3",
            area: "general"
        },
        {
            nombre: "Grecia Ávalos Ramos",
            materias: "Lengua y Comunicación",
            semestres: "1 y 3",
            estudios: "Licenciatura y maestría; especialidades por confirmar",
            lugar: "B-1",
            area: "general"
        },
        {
            nombre: "Sandra Catalina Silva Camacho",
            materias: "Comunicación",
            semestres: "Por confirmar",
            estudios: "Maestría en Metodología de la Enseñanza",
            lugar: "B-4",
            area: "general"
        },
        {
            nombre: "Liliana Rosas Pacheco",
            materias: "Humanidades, Pensamiento Filosófico, Conciencia Histórica, Lengua y Comunicación y Formación Socioemocional",
            semestres: "1 y 5",
            estudios: "Licenciatura en Pedagogía, posgrado en Educación y Doctorado en Educación",
            lugar: "A-8",
            area: "general"
        },
        {
            nombre: "Karla Valeria Morán Lerma",
            materias: "Pensamiento Filosófico, Ciencias Sociales y Cultura Digital",
            semestres: "1 y 3",
            estudios: "Maestría; especialidad por confirmar",
            lugar: "A-6",
            area: "general"
        },
        {
            nombre: "Benjamín Limón Martínez",
            materias: "Informática, Programación, Inteligencia Artificial y Cultura Digital",
            semestres: "1, 3 y 5; por confirmar según materia",
            estudios: "Administración en Productividad y Calidad; Maestría en Educación",
            lugar: "Laboratorio 5",
            area: "programacion"
        },
        {
            nombre: "Isidro de León Flores",
            materias: "Educación Física Premilitar",
            semestres: "1, 3 y 5",
            estudios: "Licenciatura en Psicopedagogía y Pedagogía",
            lugar: "Explanada",
            area: "general"
        },
        {
            nombre: "Norma Elena Torres Quiñones",
            materias: "Ciencias Naturales e IT",
            semestres: "1, 3 y 5",
            estudios: "Ingeniería Química y Maestría en Docencia",
            lugar: "C-5",
            area: "general"
        },
        {
            nombre: "Luis Enrique Lerma Martínez",
            materias: "Formación Socioemocional, Lengua y Comunicación, Conciencia Histórica y áreas de Mantenimiento Petrolero e Industrial",
            semestres: "1, 3 y 5",
            estudios: "Pedagogía/Docencia e Ingeniería Petrolera",
            lugar: "B-2",
            area: "mantenimiento"
        },
        {
            nombre: "Brenda Itzel Herrera García",
            materias: "Informática, Cultura Digital e Inteligencia Artificial",
            semestres: "1 y 3",
            estudios: "Técnica en Informática, Ingeniería en Sistemas Computacionales y Maestría en Educación",
            lugar: "Laboratorio 2 y 5",
            area: "programacion"
        },
        {
            nombre: "Walter Allan Barrera Cerda",
            materias: "Comunicación, Inglés III y club de Rondalla",
            semestres: "1, 2 y 3 en club; Inglés III",
            estudios: "Ingeniería Industrial y Administración",
            lugar: "A-2",
            area: "general"
        },
        {
            nombre: "Gerardo de la Rosa Ortega",
            materias: "Inglés",
            semestres: "5",
            estudios: "Licenciatura en Contaduría",
            lugar: "A-4",
            area: "general"
        },
        {
            nombre: "Erika Aidé Pérez Abrego",
            materias: "Ciencias Naturales y Humanidades",
            semestres: "3 y 5",
            estudios: "Ingeniería Industrial en Sistemas y Maestría en Educación",
            lugar: "A-1",
            area: "general"
        },
        {
            nombre: "Samuel Gonzales de la Fuente",
            materias: "Pensamiento Filosófico, Ciencias Sociales y Estudios Literarios",
            semestres: "1, 3 y 5",
            estudios: "Licenciatura en Administración de Empresas y carrera técnica en Ebanistería",
            lugar: "C-7",
            area: "administracion"
        },
        {
            nombre: "Laura Esmeralda Heredia Blanco",
            materias: "Ciencias; especialidad en Física y Química",
            semestres: "1, 3 y 5",
            estudios: "Biología",
            lugar: "A-7",
            area: "general"
        },
        {
            nombre: "Felipe Hernández González",
            materias: "Electrónica, Semiconductores, Lengua y Comunicación y Conciencia Histórica",
            semestres: "3 y 5",
            estudios: "Ingeniería en Electrónica",
            lugar: "Laboratorio de Electronica",
            area: "electronica"
        },
        {
            nombre: "Yuridia Lizbeth Cepeda Ramos",
            materias: "Inglés y Temas Selectos de Matemáticas II",
            semestres: "No especificados",
            estudios: "Ingeniería Industrial, Licenciatura en Matemáticas, Maestría en Educación e Innovación Educativa; cursa Doctorado en Educación",

            lugar: "A-5",
            area: "general"
        },
        {
            nombre: "Juan Pablo Torres Adame",
            materias: "Programación, Cultura Digital, club de Robótica y cursos sabatinos de Excel",
            semestres: "1, 3 y 5",
            estudios: "Licenciatura en Información Administrativa y Maestría en Ciencias de la Enseñanza",
            lugar: "No especificado",
            area: "programacion"
        },
        {
            nombre: "Romualdo Guadalupe de la Cruz",
            materias: "Pensamiento Matemático y áreas de Mantenimiento Industrial e Instalaciones Petroleras",
            semestres: "1 y 3",
            estudios: "Mantenimiento Industrial y Mantenimiento en Instalaciones Petroleras",
            lugar: "No especificado",
            area: "mantenimiento"
        },
        {
            nombre: "Ulises Solís Rieboles",
            materias: "Ciencias Naturales I, III y V",
            semestres: "1, 3 y 5",
            estudios: "Químico Farmacéutico Biólogo; maestrías en Análisis Clínicos y Educación; cursa Doctorado en Educación",
            lugar: "A-9",
            area: "general"
        },
        {
            nombre: "Trinidad Hernades Barrera",
            materias: "Ciencias Naturales, Experimentales y Tecnología I, III y V",
            semestres: "1, 3 y 5",
            estudios: "Biología",
            lugar: "C-7",
            area: "general"
        },
        {
            nombre: "Mildred Yasmín Reyes Norberto",
            materias: "Temas Selectos de Matemáticas II",
            semestres: "5",
            estudios: "Ingeniería Química y Maestría en Docencia",
            lugar: "C-1",
            area: "general"
        }
    ];


    // ELEMENTOS DEL DIRECTORIO
    const campoBusqueda = document.getElementById("buscarDocente");
    const filtroArea = document.getElementById("filtroArea");

    const listaDocentes =
        document.getElementById("resultadosDocentes") ||
        document.getElementById("listaDocentes");

    const contadorDocentes = document.getElementById("contadorDocentes");
    const sinResultados = document.getElementById("sinResultados");
    const limpiarBusqueda = document.getElementById("limpiarBusqueda");


    // CONVIERTE TEXTO A MINÚSCULAS Y QUITA ACENTOS
    function normalizar(texto) {
        return texto
            .toLocaleLowerCase("es")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
    }


    // NOMBRE VISIBLE DE CADA ÁREA
    function nombreArea(area) {
        const nombres = {
            programacion: "Programación y tecnología",
            mantenimiento: "Mantenimiento",
            administracion: "Administración",
            electronica: "Electrónica",
            general: "Área general"
        };

        return nombres[area] || "Área por confirmar";
    }


    // CREA LOS PÁRRAFOS DE INFORMACIÓN
    function crearParrafo(etiqueta, valor) {
        const parrafo = document.createElement("p");
        const negrita = document.createElement("strong");

        negrita.textContent = etiqueta + ": ";
        parrafo.appendChild(negrita);
        parrafo.appendChild(document.createTextNode(valor));

        return parrafo;
    }


    // CREA LAS INICIALES DEL DOCENTE
    function obtenerIniciales(nombre) {
        return nombre
            .split(" ")
            .filter(Boolean)
            .slice(0, 2)
            .map(function (palabra) {
                return palabra.charAt(0).toUpperCase();
            })
            .join("");
    }


    // MUESTRA LOS DOCENTES
    function renderizarDocentes() {

        if (!campoBusqueda || !filtroArea || !listaDocentes) {
            return;
        }

        const consulta = normalizar(campoBusqueda.value.trim());
        const areaElegida = filtroArea.value;

        const filtrados = docentes.filter(function (docente) {

            const contenido = normalizar([
                docente.nombre,
                docente.materias,
                docente.estudios,
                docente.semestres,
                docente.experiencia,
                docente.area
            ].join(" "));

            const coincideTexto = contenido.includes(consulta);

            const coincideArea =
                areaElegida === "" ||
                areaElegida === "todas" ||
                docente.area === areaElegida;

            return coincideTexto && coincideArea;
        });


        // LIMPIA LOS RESULTADOS ANTERIORES
        listaDocentes.replaceChildren();


        // CREA UNA TARJETA POR CADA DOCENTE
        filtrados.forEach(function (docente) {

            const tarjeta = document.createElement("article");
            tarjeta.className = "tarjeta-docente";


            // FOTOGRAFÍA O AVATAR
            if (docente.foto) {

                const foto = document.createElement("img");

                foto.className = "foto-docente";
                foto.src = docente.foto;
                foto.alt = "Fotografía de " + docente.nombre;

                tarjeta.appendChild(foto);

            } else {

                const avatar = document.createElement("div");

                avatar.className = "foto-docente";
                avatar.textContent = obtenerIniciales(docente.nombre);
                avatar.setAttribute("aria-label", "Avatar de " + docente.nombre);

                avatar.style.display = "flex";
                avatar.style.alignItems = "center";
                avatar.style.justifyContent = "center";
                avatar.style.fontSize = "30px";
                avatar.style.fontWeight = "bold";
                avatar.style.color = "#5A1730";

                tarjeta.appendChild(avatar);
            }


            // NOMBRE
            const nombre = document.createElement("h3");
            nombre.textContent = docente.nombre;


            // ÁREA
            const area = document.createElement("span");
            area.className = "docente-area";
            area.textContent = nombreArea(docente.area);


            // INFORMACIÓN
            tarjeta.appendChild(nombre);
            tarjeta.appendChild(area);

            tarjeta.appendChild(
                crearParrafo("Materias/actividades", docente.materias)
            );

            tarjeta.appendChild(
                crearParrafo("Semestres", docente.semestres)
            );

            tarjeta.appendChild(
                crearParrafo("Formación", docente.estudios)
            );

            tarjeta.appendChild(
                crearParrafo("Experiencia", docente.experiencia)
            );

            tarjeta.appendChild(
                crearParrafo("Salón/lugar", docente.lugar)
            );


            // AGREGA LA TARJETA
            listaDocentes.appendChild(tarjeta);

        });


        // CONTADOR DE DOCENTES
        if (contadorDocentes) {
            contadorDocentes.textContent =
                "Se encontraron " + filtrados.length +
                " de " + docentes.length + " docentes.";
        }


        // MENSAJE CUANDO NO HAY RESULTADOS
        if (sinResultados) {
            sinResultados.hidden = filtrados.length !== 0;
        } else if (filtrados.length === 0) {

            const mensaje = document.createElement("p");

            mensaje.className = "sin-resultados";
            mensaje.textContent =
                "No se encontraron docentes. Intenta con otro nombre o área.";

            listaDocentes.appendChild(mensaje);
        }
    }


    // BUSCADOR
    if (campoBusqueda) {
        campoBusqueda.addEventListener("input", renderizarDocentes);
    }


    // FILTRO POR ÁREA
    if (filtroArea) {
        filtroArea.addEventListener("change", renderizarDocentes);
    }


    // BOTÓN PARA LIMPIAR
    if (limpiarBusqueda) {
        limpiarBusqueda.addEventListener("click", function () {

            campoBusqueda.value = "";
            filtroArea.value = "";

            renderizarDocentes();

            campoBusqueda.focus();
        });
    }


    // MUESTRA LOS DOCENTES AL CARGAR LA PÁGINA
    renderizarDocentes();


    // 5. AÑO AUTOMÁTICO EN EL PIE DE PÁGINA
    const anioActual = document.getElementById("anioActual");

    if (anioActual) {
        anioActual.textContent = new Date().getFullYear();
    }


    // 6. FORMULARIO DE CONTACTO
    const formularioContacto = document.getElementById("formContacto");
    const respuestaContacto = document.getElementById("respuestaContacto");

    if (formularioContacto && respuestaContacto) {

        formularioContacto.addEventListener("submit", function (evento) {

            evento.preventDefault();

            if (!formularioContacto.checkValidity()) {
                formularioContacto.reportValidity();
                return;
            }

            respuestaContacto.textContent =
                "Prueba completada. Este formulario es demostrativo y no envió tus datos.";

            formularioContacto.reset();

        });
    }

});
