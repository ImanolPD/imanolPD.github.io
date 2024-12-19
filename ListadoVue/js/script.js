const culturistas = [
    {
      nombre: "Arnold Schwarzenegger",
      logros: "7x Mr. Olympia",
      descripcion: "Leyenda del culturismo y estrella de cine. Revolucionó el mundo del fitness.",
      imagen: "img/arnold.webp",
      redes: {
        instagram: "https://instagram.com/schwarzenegger",
        youtube: "https://youtube.com/arnold",
      },
    },
    {
      nombre: "Ronnie Coleman",
      logros: "8x Mr. Olympia",
      descripcion: "Conocido como el más grande de todos los tiempos. Su fuerza es legendaria.",
      imagen: "img/ronnie.webp",
      redes: {
        instagram: "https://instagram.com/schwarzenegger",
        youtube: "https://youtube.com/arnold",
      },
    },
    {
      nombre: "Phil Heath",
      logros: "7x Mr. Olympia",
      descripcion: "Apodado 'The Gift', dominó la escena del culturismo en los años 2010.",
      imagen: "img/phil.webp",
      redes: {
        instagram: "https://instagram.com/schwarzenegger",
        youtube: "https://youtube.com/arnold"
      },
    },
    {
        nombre: "Jose María Muñoz",
        logros: "5º lugar en su primer Mr. Olympia",
        descripcion: "Jóven promesa del culturismo. Probablemente el mejor culturista de 21 años.",
        imagen: "img/josema.webp",
        redes: {
          instagram: "https://instagram.com/schwarzenegger",
          youtube: "https://youtube.com/arnold"
        },
      },
];

// Variables para la paginación
const elementosPorPagina = 2; // Número de culturistas por página
let paginaActual = 1;

function renderizarCulturistas() {
    const lista = document.getElementById("lista-culturistas");
    lista.innerHTML = "";

    // Calcular el rango de culturistas a mostrar según la página actual
    const inicio = (paginaActual - 1) * elementosPorPagina;
    const fin = inicio + elementosPorPagina;
    const culturistasPaginados = culturistas.slice(inicio, fin);

    culturistasPaginados.forEach(culturista => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");
        tarjeta.innerHTML = `
            <img src="${culturista.imagen}" alt="${culturista.nombre}">
            <div class="contenido-tarjeta">
                <h2>${culturista.nombre}</h2>
                <p><strong>Logros:</strong> ${culturista.logros}</p>
                <p>${culturista.descripcion}</p>
                <div class="enlaces-redes">
                    ${culturista.redes.instagram ? `<a href="${culturista.redes.instagram}" target="_blank">Instagram</a>` : ""}
                    ${culturista.redes.youtube ? `<a href="${culturista.redes.youtube}" target="_blank">YouTube</a>` : ""}
                </div>
                <button class="boton-me-gusta">❤️ Me gusta (<span class="contador-me-gusta">0</span>)</button>
            </div>
        `;

        tarjeta.querySelector(".boton-me-gusta").addEventListener("click", (e) => {
            const contador = e.target.querySelector(".contador-me-gusta");
            let cantidad = parseInt(contador.textContent, 10);
            cantidad++;
            contador.textContent = cantidad;
            localStorage.setItem(culturista.nombre, cantidad);
        });

        const likesGuardados = localStorage.getItem(culturista.nombre);
        if (likesGuardados) {
            tarjeta.querySelector(".contador-me-gusta").textContent = likesGuardados;
        }

        lista.appendChild(tarjeta);
    });

    // Renderizar botones de paginación
    renderizarBotonesPaginacion();
}

// Modificar la búsqueda para limitarla a los culturistas visibles
document.getElementById("search-input").addEventListener("input", (e) => {
    const consulta = e.target.value.toLowerCase();

    // Obtener los culturistas de la página actual
    const inicio = (paginaActual - 1) * elementosPorPagina;
    const fin = inicio + elementosPorPagina;
    const culturistasPaginados = culturistas.slice(inicio, fin);

    // Filtrar entre los visibles
    const culturistasFiltrados = culturistasPaginados.filter(culturista =>
        culturista.nombre.toLowerCase().includes(consulta) ||
        culturista.logros.toLowerCase().includes(consulta)
    );
    renderizarCulturistasFiltrados(culturistasFiltrados);
});

function renderizarCulturistasFiltrados(filtrados) {
    const lista = document.getElementById("lista-culturistas");
    lista.innerHTML = "";

    filtrados.forEach(culturista => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");
        tarjeta.innerHTML = `
            <img src="${culturista.imagen}" alt="${culturista.nombre}">
            <div class="contenido-tarjeta">
                <h2>${culturista.nombre}</h2>
                <p><strong>Logros:</strong> ${culturista.logros}</p>
                <p>${culturista.descripcion}</p>
                <div class="enlaces-redes">
                    ${culturista.redes.instagram ? `<a href="${culturista.redes.instagram}" target="_blank">Instagram</a>` : ""}
                    ${culturista.redes.youtube ? `<a href="${culturista.redes.youtube}" target="_blank">YouTube</a>` : ""}
                </div>
                <button class="boton-me-gusta">❤️ Me gusta (<span class="contador-me-gusta">0</span>)</button>
            </div>
        `;

        tarjeta.querySelector(".boton-me-gusta").addEventListener("click", (e) => {
            const contador = e.target.querySelector(".contador-me-gusta");
            let cantidad = parseInt(contador.textContent, 10);
            cantidad++;
            contador.textContent = cantidad;
        });

        lista.appendChild(tarjeta);
    });
}

// Función para renderizar los botones de paginación
function renderizarBotonesPaginacion() {
    const contenedorPaginacion = document.getElementById("paginacion");
    contenedorPaginacion.innerHTML = "";

    const totalPaginas = Math.ceil(culturistas.length / elementosPorPagina);

    for (let i = 1; i <= totalPaginas; i++) {
        const boton = document.createElement("button");
        boton.textContent = i;
        boton.classList.add("boton-pagina");
        if (i === paginaActual) boton.classList.add("activo");
        boton.addEventListener("click", () => {
            paginaActual = i;
            renderizarCulturistas();
        });
        contenedorPaginacion.appendChild(boton);
    }
}

// Elemento para los botones de paginación
const paginacionDiv = document.createElement("div");
paginacionDiv.setAttribute("id", "paginacion");
document.body.appendChild(paginacionDiv);

// Inicialización del renderizado
renderizarCulturistas();
