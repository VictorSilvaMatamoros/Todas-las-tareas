let StudentButton = document.getElementById("StudentButton");
let studentName = document.getElementById("studentName");



function GetRandomStudent(){

    const nombres = [ "Pablo", "Kavote","Juan","Thalia"];
const aleatorio = nombres[Math.floor(Math.random() * nombres.length)];
console.log(aleatorio);
studentName.innerText=aleatorio;
}


StudentButton.addEventListener("click", GetRandomStudent);