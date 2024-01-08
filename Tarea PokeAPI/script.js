document.addEventListener("DOMContentLoaded", function () {
    cargarPersonajeAleatorio();
});

async function cargarPersonajeAleatorio() {
    let personajeAleatorio = Math.floor(Math.random() * (character.length));
    const url = `https://thesimpsonsquoteapi.glitch.me/quotes?character${personajeAleatorio}/`;
    let respuesta = await fetchData(url);
    const data = await respuesta.json();
    mostrarPersonaje(data);
    }
function mostrarPersonaje(character) {
    const nombrePersonaje = character.name;
    const frase = character.quote;
    const imagenPersonaje = character.image;


const infoContainer = document.getElementById("personaje-info");
infoContainer.innerHTML = `<p>${nombrePersonaje}</p><p>Frase: ${frase}</p>`;

document.getElementById("personaje-image").src = imagenPersonaje;

}
