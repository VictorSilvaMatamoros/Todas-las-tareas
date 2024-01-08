import { drawImage } from "./modules/drawImage.js";
import { clearRect } from "./modules/clearRect.js";
import { WIDTH, HEIGHT, FACTOR } from "./modules/constants.js";

const myCanvas = document.getElementById("myCanvas");
myCanvas.width = WIDTH;
myCanvas.height = HEIGHT;

// El contexto se refiere al "pincel" que proporciona el lienzo (canvas)
let context = myCanvas.getContext("2d");

// Dibujar un círculo
/*
// Comienza el trazo (Posicionamos el pincel en el lienzo)
context.beginPath();

// (pos X centro, pos Y centro, radio, ángulo inicio, ángulo final, sentido del trazo)
// Queremos empezar a dibujar en el ángulo 0 y que llegue al final del círculo ( 2*Math.PI)
// El último parámetro es opcionar, si queremos que el trazo vaya en el sentido de las agujas del reloj (true) o al contrario (false)
context.arc(95, 50, 40, 0, 2 * Math.PI);

// Color del relleno
context.fillStyle = "blue";

// Rellenar del color de relleno
context.fill();

// Color y grosor del borde
context.strokeStyle = "black";
context.lineWidth = 2;

// Dibujar el borde
context.stroke();

// Cerrar el trazo (Levantamos el pincel del lienzo)
context.closePath();
*/

// Dibujar un cuadrado/rectángulo
/*
let boxWidth = myCanvas.width - 100;
let boxHeight = myCanvas.height - 100;
// (pos X inicial, pos Y inicial, ancho, largo)
context.fillRect(50, 50, boxWidth, boxHeight);
*/

// Ejemplo movimiento jugador

const player = {
  url: "./images/player.png",
  x: (WIDTH / 2) - 50,
  y: HEIGHT - 150,
  speed: 15
};


function update() {
  console.log("update");
  requestAnimationFrame(render);
  requestAnimationFrame(update);
}

function render() {
  clearRect(context);
  //context.drawImage(wallpaper, 0, 0, myCanvas.width, myCanvas.height);
  drawImage(context, player);
}

addEventListener("keydown", (event) => {
  let isLeft = event.key === "ArrowLeft";
  let isRight = event.key === "ArrowRight";

  if (isLeft) {
    player.x -= player.speed * FACTOR;
  }
  if (isRight) {
    player.x += player.speed * FACTOR;
  }
});


let wallpaper = new Image();
wallpaper.src = "./images/space-bg.png";
wallpaper.onload = function () {
  render();
  update();
};


