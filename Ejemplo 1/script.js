/*
  Eventos
  - drag: Este evento se activa en el origen del arrastre, es decir, el elemento donde dragstart fue disparado, durante la operación de arrastre.
  - drop: El evento se dispara sobre el elemento en el que se produjo la colocación al finalizar la operación de arrastre.
  - dragstart: Se ejecuta sobre un elemento cuando se inicia una operación de arrastre.
  - dragenter: Se dispara cuando el ratón se mueve primero sobre un elemento, mientras está teniendo lugar una operación de arrastre.
  - dragover: Se activa cuando el ratón se mueve sobre un elemento cuando está teniendo lugar una operación de arrastre.
  - dragleave: Este evento se activa cuando el ratón/mouse sale de un elemento mientras que está teniendo lugar una operación de arrastre.
  - dragend: El origen del arrastre recibirá un evento dragend cuando la operación se haya completado, tanto si tuvo éxito como si no.

  Generalmente se necesita utilizar el método preventDefault() para evitar el comportamiento predeterminado del navegador, que suele ser
  abrir el archivo o enlace en el navegador cuando intentas soltarlo en un área específica.
  evento.preventDefault();
*/


const elementosVacios = document.querySelectorAll(".vacio");
const elementoLleno = document.querySelector(".lleno");

for (const elemento of elementosVacios) {
  elemento.addEventListener('drop', DropElemento);
  elemento.addEventListener('dragover', DragOverElemento);
  elemento.addEventListener('dragenter', DragEnterElemento);
  //elemento.addEventListener('dragleave', DragLeaveElemento);
}

//elementoLleno.addEventListener('dragstart', DragStartElemento);
//elementoLleno.addEventListener('dragend', DragEndElemento);

function DragElemento(evento) {
  console.log("drag");
}

function DropElemento(evento) {
  console.log("drop: " + this);
  console.log("evento: " + evento);

  //this hace referencia al elemento dónde soltamos
  this.append(elementoLleno);
}

function DragStartElemento(evento) {
  console.log("dragstart");
}

function DragLeaveElemento(evento) {
  console.log("dragleave");
}

function DragEndElemento(evento) {
  console.log("dragend");
}

// preventDefault se debe poner al menos en los siguientes eventos por ser estos los que permiten que la zona de destino reaccione al arrastre
function DragEnterElemento(evento) {
  evento.preventDefault();
  console.log("dragenter");
}

function DragOverElemento(evento) {
  evento.preventDefault();
  console.log("dragover");
}
