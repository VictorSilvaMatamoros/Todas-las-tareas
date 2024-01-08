let daysElement = document.getElementById('dias');
let hoursElement = document.getElementById('horas');
let minsElement = document.getElementById('minutos');
let secondsElement = document.getElementById('segundos');
let upcomingImg = document.getElementById('imagenEstaciones');
let countdownContainer = document.querySelector('.countdown-container');
let h1Element = document.querySelector('h1');

let currentDate = new Date();
let goalDate = new Date(2024, 4, 12, 1, 46); // Cambia esta fecha por la fecha objetivo que desees
let days, hours, mins, seconds, totalSeconds;

// Crea un intervalo que llama a la función cada segundo
let countdownInterval = setInterval(countdown, 1000);
countdown();
cambiarImagenSegunEstacion();

function countdown() {
  currentDate = new Date();
  totalSeconds = (goalDate - currentDate) / 1000;

  // Condición para comprobar si la fecha objetivo ya ha pasado
  if (Math.floor(totalSeconds) < 0) {
    showPastMessage();
    return;
  }

  mes = Math.floor(totalSeconds / (30.44 * 24 * 60 * 60));
  days = Math.floor(totalSeconds / 3600 / 24);
  hours = Math.floor(totalSeconds / 3600) % 24;
  mins = Math.floor(totalSeconds / 60) % 60;
  seconds = Math.floor(totalSeconds) % 60;

  daysElement.innerHTML = days;
  hoursElement.innerHTML = hours;
  minsElement.innerHTML = mins;
  secondsElement.innerHTML = seconds;
}

function showPastMessage() {
  upcomingImg.src = './imagenes/pasado.png'; // Cambia 'ruta_de_la_imagen_del_pasado.jpg' por la ruta de tu imagen para fechas pasadas
  countdownContainer.style.display = 'none';
  h1Element.innerHTML = '¡Esa fecha ya pasó!';
  // Paramos el intervalo que se estaba ejecutando
  clearInterval(countdownInterval);
}

function cambiarImagenSegunEstacion() {
  let imagen = document.getElementById("imagenEstaciones");
  let fecha = new Date();
  let dia = Math.floor((fecha - new Date(fecha.getFullYear(), 0, 0)) / 86400000);

  if (dia >= 79 && dia < 172) {
    // Primavera
    document.body.style.backgroundImage = "url('./imagenes/primavera.jpg')";
  } else if (dia >= 172 && dia < 264) {
    // Verano
    document.body.style.backgroundImage = "url('./imagenes/verano.jpg')";
  } else if (dia >= 264 && dia < 355) {
    // Otoño
    document.body.style.backgroundImage = "url('./imagenes/otono.jpg')";
  } else {
    // Invierno
    document.body.style.backgroundImage = "url('./imagenes/invierno.jpg')";
  }
}
