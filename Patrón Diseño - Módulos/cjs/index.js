//CommonJS require module

// 'require' permite importar módulos, json...

const modulos = require('./calculadora')
console.log(modulos)

const userJson = require('./users.json')
console.log(userJson)

//const { sumar, restar } = require('./calculadora')
//console.log(sumar(1, 2))

// Las librerías que instalamos de terceros, generalmente en su package.json
// indican si son cjs o mjs, si no ponen nada, usan cjs, ejemplo:
/* ...
  "types": "atropos.d.ts",
  "type": "module",
  "exports": {
   ... */

// Al instalar una librería como jsonwebtoken
// npm install jsonwebtoken
// Para poder importarla, no necesitamos poner la ruta entera del fichero
// const libreria = require('jsonwebtoken')
// Al poner la anterior ruta, se referencia al index.js de la librería

// También tenemos librerías internas que trae el core de node como file system:
//const fs = require('fs')



