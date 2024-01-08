const negro = document.querySelectorAll(".NoColor");
const rojo = document.querySelector(".SiColor");


for (const elemento of elementosVacios) {
    elemento.addEventListener('drop', DropElemento);
    elemento.addEventListener('dragover', DragOverElemento);
    elemento.addEventListener('dragenter', DragEnterElemento);
    //elemento.addEventListener('dragleave', DragLeaveElemento);
  }




  
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
  