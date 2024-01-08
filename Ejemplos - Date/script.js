console.log("----------Objeto Date----------");

//Se guardan en milisegundos que han pasado desde el 1 de enero de 1970
let fecha = new Date();
let fechaAleatoria = new Date(848854532432.664);
let fechaEscogida = new Date('09/13/2022'); // Mes/día/año
let fechaExacta = new Date(2022, 8, 27, 21, 30); // Año, mes, día, hora, minutos
//Si se sobrepasan los valores, se aplican al siguiente.

console.log(fecha);
console.log(fechaAleatoria);
console.log(fechaEscogida);
console.log(fechaExacta);

console.log(`%cgetDay: %c${fecha.getDay()}`,` font-weight: bold; color: blue;`, "");
console.log(`%cgetFullYear: %c${fecha.getFullYear()}`,` font-weight: bold; color: blue;`, ""); 
console.log(`%cgetMonth (0 es enero): %c${fecha.getMonth()}`,` font-weight: bold; color: blue;`, ""); 
console.log(`%cgetDate (día del mes): %c${fecha.getDate()}`,` font-weight: bold; color: blue;`, ""); 
console.log(`%cgetHours: %c${fecha.getHours()}`,` font-weight: bold; color: blue;`, "");
console.log(`%cgetMinutes: %c${fecha.getMinutes()}`,` font-weight: bold; color: blue;`, "");
console.log(`%cgetSeconds: %c${fecha.getSeconds()}`,` font-weight: bold; color: blue;`, "");
console.log(`%cgetTime (milisegundos): %c${fecha.getTime()}`,` font-weight: bold; color: blue;`, ""); 
console.log(`%ctoDateString: %c${fecha.toDateString()}`,` font-weight: bold; color: blue;`, "");
console.log(`%ctoLocaleDateString: %c${fecha.toLocaleDateString()}`,` font-weight: bold; color: blue;`, "");
console.log(`%ctoJSON: %c${fecha.toJSON()}`,` font-weight: bold; color: blue;`, "");
console.log(`%ctoTimeString: %c${fecha.toTimeString()}`,` font-weight: bold; color: blue;`, "");
console.log(`%ctoLocaleTimeString: %c${fecha.toLocaleTimeString()}`,` font-weight: bold; color: blue;`, "");
console.log(`%ctoString: %c${fecha.toString()}`,` font-weight: bold; color: blue;`, "");
console.log(`%ctoLocaleString: %c${fecha.toLocaleString()}`,` font-weight: bold; color: blue;`, "");

let fecha1 = new Date('09/13/2022');
let fecha2 = new Date('02/23/2020');
console.log(fecha1 > fecha2);

let fecha3 = Date.parse("02/23/1999");
console.log(fecha3);

let nuevaFecha = new Date();
nuevaFecha.setDate(23);
nuevaFecha.setMonth(4);
nuevaFecha.setFullYear(2019);
console.log(nuevaFecha);

nuevaFecha = nuevaFecha.toLocaleDateString().split('/');
console.log(nuevaFecha[0]);
console.log(nuevaFecha[1]);
console.log(nuevaFecha[2]);


