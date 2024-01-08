console.log("----------Objeto RegExp----------");



const regexp = new RegExp("/J..a/", "i");
//Las barras delimitan la expresión regular 
//Los flags indican cómo funcionará la regex

//Métodos
/*
test(texto): Devuelve un boolean
exec(texto): Devuelve un array con las coincidencias	
*/

//Algunos flags (Carácteres especiales) y propiedades
/*
g (.global): Permite seguir buscando coincidencias en lugar de pararse al encontrar una.
i (.ignoreCase): Le da igual mayúsculas y minúsculas.
m (.multiline): Permite a ^ y $ tratar los finales de línea \r o \n
s (.dotAll): Establece si \n, \r, separación de párrafo o separación de línea deberían considerarse en los .
*/


let cadenaRegex = "JavAScript";
const regex = /.a/g;

console.log(regex.test(cadenaRegex));
console.log(cadenaRegex.match(regex));


const objeto = { name: "Elías" };
const regexpObj = /object/g;
objeto.toString();         // "[object Object]"
regexpObj.test(objeto);    // true


// \   Precedido de un carácter especial, lo invadila
// .   Cualquier carácter
// []  Rango de carácteres
// [^] Que no exista ninguno de los carácteres 
// |   Alternativa
// ^   Empieza por
// $   Acaba en
// \b  Limite del espacio, comas o puntos
// *   0 o más veces
// +   1 o más veces
// ?   El carácter anterior es opcional
// {n} Aparece n veces
// {n,} Aparece n veces o más
// {n,m} Aparece de n a m veces
// \w letras mayúsculas, minúsculas, números o guión bajo
// \s espacio en blanco





// Ejemplos comunes:

// dni = /^[0-9]{8}[A-Z]$/

// nombreUsuario = /^[a-z0-9_-]{3,16}$/

// correo = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
// url = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
// ip = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/