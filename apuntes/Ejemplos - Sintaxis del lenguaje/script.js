///////////////////////////////////////////////////////////////////////////////////////

// VARIABLES

/*

    //Al contrario que otros lenguajes de programación, en JavaScript los tipos de datos son
    //dinámicos, con lo que la misma variable puede cambiar de tipo de datos sin problema:
    var dias = 365;
    console.log (typeof(dias));
    dias = '365';
    console.log (typeof(dias));

*/

// Ejemplos VAR y LET

/*

    var a = 1;
    console.log(a); // Aquí accedemos a la "a" global, que vale 1

    function x() {
      console.log(a); // En esta línea el valor de "a" es undefined
      var a = 5; // Aquí creamos una variable "a" a nivel de función

      console.log(a); // Aquí el valor de "a" es 5 (a nivel de función)
      console.log(window.a); // Aquí el valor de "a" es 1 (ámbito global)
    }

    x(); // Aquí se ejecuta el código de la función x()
    console.log(a); // En esta línea el valor de "a" es 1

*/

// Lo mismo con let:

/*
    let a = 1;
    console.log(a); // Aquí accedemos a la "a", que vale 1

    function x() {
      console.log(a); 
      a = 5; // Aquí cambiamos su valor

      console.log(a);
      console.log(window.a); // En esta línea el valor de "a" es undefined
    }

    x(); // Aquí se ejecuta el código de la función x()
    console.log(a); // En esta línea el valor de "a" es 1

*/

/*
    // Opción 1: Bucle con let

    console.log("Antes: ", p);    // Antes: undefined
    for (let p = 0; p < 3; p++){
      console.log("- ", p);       // Durante: 0, 1, 2
    }
    console.log("Después: ", p);  // Después: undefined

    // Opción 2: Bucle con var

    console.log("Antes: ", p);    // Antes: undefined
    for (var p = 0; p < 3; p++){
      console.log("- ", p);       // Durante: 0, 1, 2
    }
    console.log("Después: ", p);  // Después: 3 (WTF!)

    // Vemos que utilizando let la variable p sólo existe dentro del bucle, ámbito local,
    // mientras que utilizando var la variable p sigue existiendo fuera del bucle,
    // ya que debe tener un ámbito global o a nivel de función.


    RESUMEN: var define una variable global o local sin tener en cuenta el ámbito del 
    bloque donde se declara; let, por el contrario, sí tiene en cuenta este ámbito. 

*/


///////////////////////////////////////////////////////////////////////////////////////

// CADENAS

/*
  let mensaje = " Hola mundo "
  console.log(mensaje.length);
  console.log(mensaje[3]);
  console.log(mensaje.repeat(5));

  const palabra = `<p> Hola mundo </p>` //Permiten interpolar el valor de las variables sin tener que cerrar, concatenar y abrir la cadena de texto continuamente

  const plantilla =
  `
    <div>
        ${palabra}
    </div>
  `

    let producto = new String('Monitor 27 Pulgadas');
    console.log(producto.includes('Monitor'));
    console.log(producto.concat(" -> 30€"));
    console.log(producto.replace('Pulgadas', '"'));
    console.log(producto.toUpperCase());


*/


///////////////////////////////////////////////////////////////////////////////////////

// OPERADORES

/*
    var numero1 = 123;
    var numero2 = '123'
    console. log ( numero1 == numero2 ) ; // true -> Compara valores
    console. log ( numero1 === numero2 ) ; // false -> Compara valores y tipos

    // Una buena práctica es usar ===
*/


///////////////////////////////////////////////////////////////////////////////////////


// CONDICIONES -> Operador ternario

/*

let puntos = 4;
if (puntos >= 5) {
   alert('Aprobaste');
}
else {
   alert('Fallaste');
}

//Lo podemos poner en una línea:
alert ( puntos >= 5 ? 'Pasaste' : 'Fallaste' );

// O guardar en una variable
let resultado = puntos >= 5 ? 'Pasaste' : 'Fallaste';

// Otro ejemplo más complejo, no son tan recomendados por su posible complejidad al leer

if(autenticado)
{
    if(puedePagar)
    {
        console.log('Si esta autenticado y puede pagar');
    }else
    {
        console.log('Si autenticado, no puede pagar' );
    }
}else
{
    console.log('No, no esta autenticado');
}

//Lo podemos poner en una línea:
console.log(autenticado ? puedePagar ? 'Si esta autenticado y puede pagar' : 'Si autenticado, no puede pagar' : 'No, no esta autenticado' );

*/


///////////////////////////////////////////////////////////////////////////////////////


// BUCLES
/*
const carrito = [
    { nombre: 'Monitor', precio: 500 },
    { nombre: 'Móvil', precio: 100, descuento: true },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Teclado', precio: 400 },
]

carrito.forEach(element => {
    console.log(element.precio);
});

//Imprime el artículo que tiene descuento, si no lo tiene, sólo escribe el nombre.
carrito.forEach(element => {
    if (element.descuento) {
        console.log(`El ${element.nombre} tiene descuento `);
        return;
    }
    console.log(element.nombre);
});


for(let producto of carrito) {
    console.log(producto.nombre)
}

// for let in para objetos.
const automovil = {
    modelo: 'Camaro',
    year: 1969,
    motor: '6.0'
}

for(let clave in automovil) {
    console.log(`${clave} -> ${automovil[clave]}`);
}

*/