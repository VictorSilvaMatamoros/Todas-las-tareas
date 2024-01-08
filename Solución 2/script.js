const colorBrush = document.getElementById("setColor");
const noColorBrush = document.getElementById("clearColor");
const images = document.querySelectorAll(".random-img");

let setColor = false;
let colored;
let currentDraggable;

colorBrush.addEventListener("dragstart", event => {
  currentDraggable = event.target;
  setColor = true;
});

noColorBrush.addEventListener("dragstart", event => {
  currentDraggable = event.target;
  setColor = false;
});

images.forEach(image => {
  image.addEventListener("drop", dropEvent);
  image.addEventListener("dragover", dragOverEvent);
});

function getClassList(element) {
  return element.className.split(' ');
}

function setCursor(target) {
  if (getClassList(target).includes("grabbing")) {
    target.classList.remove("grabbing");
  } else {
    target.classList.add("grabbing");
    window.document.body.style.cursor = "grabbing";
  }
}

function dropEvent(event) {
  //1º Forma
  isColored = !getClassList(this).includes("no-colored");
  //window.document.body.style.cursor = "default";

  if (isColored && !setColor) {
    this.classList.add("no-colored");
  } else if (!isColored && setColor) {
    this.classList.remove("no-colored");
  }

  //2º Forma (Comparar el valor de esta variable)
  console.log(currentDraggable);


}

function dragOverEvent(evento) {
  console.log("dragOverEvent")
  evento.preventDefault();
}
