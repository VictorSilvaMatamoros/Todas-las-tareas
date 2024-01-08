// Array de nombres
var nombres = ["Pablo", "Juan", "Carlos", "Kavote", "Mario", "Patri"];

// Función para obtener un nombre aleatorio del array
function obtenerNombreAleatorio() {
    return nombres[Math.floor(Math.random() * nombres.length)];
}

// Función para obtener una edad aleatoria entre 0 y 100
function obtenerEdadAleatoria() {
    return Math.floor(Math.random() * 101);
}

// Crear la tabla
var tabla = document.createElement("table");

// Añadir la tabla al div
document.getElementById("tabla").appendChild(tabla);

// Obtener el botón
var boton = document.getElementById("boton");

boton.onclick = function() {
    var fila = tabla.insertRow(-1);
    var celda1 = fila.insertCell(0);
    var celda2 = fila.insertCell(1);
    celda1.innerHTML = obtenerNombreAleatorio();
    celda2.innerHTML = "Morirá a los " + obtenerEdadAleatoria() + " años.";
};
