let velocidadCaida = 2000; // Velocidad inicial de caída
let intervaloCreacion = 2000; // Intervalo de creación inicial

function crearElemento() {
    let imagen = document.createElement("img");
    imagen.src = "img/ea4a006ccd46d354d8af99ba17bb800c-removebg-preview.png";
    imagen.className = "elemento";
    imagen.style.top = `${-20 - Math.random() * 200}px`;
    imagen.style.left = `${Math.random() * 100}vw`;
    document.querySelector(".container").appendChild(imagen);

    imagen.addEventListener("click", () => {
        imagen.remove();
    });

    setTimeout(() => {
        imagen.remove();
    }, 4000);

    // Actualizar la velocidad y el intervalo
    velocidadCaida -= 100; // Reducir la velocidad de caída en 100 ms
    intervaloCreacion -= 10; // Reducir el intervalo de creación en 10 ms

    // Llamar a la función crearElemento nuevamente con el intervalo actualizado
    setTimeout(crearElemento, intervaloCreacion);
}

// Llamar a la función crearElemento para iniciar el proceso
crearElemento();

setInterval(() => {
    // Reducir la velocidad de creación y aumentar la velocidad de caída de manera secuencial
    velocidadCaida += 50;
    intervaloCreacion -= 10;
}, 5000);
